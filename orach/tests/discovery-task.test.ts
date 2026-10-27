import test from 'node:test';import assert from 'node:assert/strict';
import {runCitySection} from '../src/lib/server/discovery-task.ts';
test('queue redelivery reuses saved city research without provider calls',async()=>{
 let fetched=false;const old=globalThis.fetch;globalThis.fetch=async()=>{fetched=true;throw Error('unexpected provider call')};
 const db={prepare(){return{bind(){return{async first(){return{status:'needs_review',result:JSON.stringify({answer:'Saved overview'})}}}}}}};
 try{const result=await runCitySection({DB:db} as any,{slug:'florence-italy',name:'Florence',country:'Italy',currency:'EUR',section:'overview'});assert.equal(result.result.answer,'Saved overview');assert.equal(fetched,false);}finally{globalThis.fetch=old;}
});
