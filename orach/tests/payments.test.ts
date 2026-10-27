import test from 'node:test';import assert from 'node:assert/strict';
import {checkout,webhook} from '../src/lib/server/payments.ts';
function database(){
 return {prepare(sql:string){
  return {bind(...values:unknown[]){
   return {async first(){return sql.includes('FROM users')?{id:'user-fixture'}:null;},async run(){return {meta:{changes:1}};}};
  }};
 }};
}
test('Checkout creates monthly subscription with user mapping and dynamic payment methods',async()=>{
 const old=globalThis.fetch;let form:URLSearchParams|undefined;
 globalThis.fetch=async(_url,init)=>{form=new URLSearchParams(String(init?.body));return Response.json({id:'cs_fixture',url:'https://checkout.stripe.com/fixture'})};
 const event={platform:{env:{DB:database(),STRIPE_SECRET_KEY:'fixture',STRIPE_WEBHOOK_SECRET:'fixture',ORACH_PASS_PRICE_CENTS:'799',ORACH_PUBLIC_ORIGIN:'https://example.org'}}};
 try{await checkout(event as any,'user-fixture','stay-fixture');assert.equal(form?.get('mode'),'subscription');assert.equal(form?.get('line_items[0][price_data][recurring][interval]'),'month');assert.equal(form?.get('subscription_data[metadata][user_id]'),'user-fixture');assert.equal(form?.has('payment_method_types'),false);}finally{globalThis.fetch=old;}
});
test('unsigned webhook cannot grant subscription access',async()=>{
 const event={platform:{env:{STRIPE_WEBHOOK_SECRET:'fixture'}},request:new Request('https://example.org/api/stripe/webhook',{method:'POST',body:'{}'})};
 await assert.rejects(()=>webhook(event as any),(error:any)=>error.status===400);
});
