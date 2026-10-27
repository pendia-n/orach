import test from 'node:test';import assert from 'node:assert/strict';
import {runCitySection} from '../src/lib/server/discovery-task.ts';
test('queue redelivery reuses saved city research without provider calls',async()=>{
 let fetched=false;const old=globalThis.fetch;globalThis.fetch=async()=>{fetched=true;throw Error('unexpected provider call')};
 const db={prepare(){return{bind(){return{async first(){return{status:'needs_review',result:JSON.stringify({answer:'Saved overview'})}}}}}}};
 try{const result=await runCitySection({DB:db} as any,{slug:'florence-italy',name:'Florence',country:'Italy',currency:'EUR',section:'overview'});assert.equal(result.result.answer,'Saved overview');assert.equal(fetched,false);}finally{globalThis.fetch=old;}
});
test('all eight queued sections persist profile evidence through their assigned providers',async()=>{
 const saved:string[]=[],requests:string[]=[];
 const db={prepare(sql:string){let values:unknown[]=[];return{bind(...args:unknown[]){values=args;return this},async first(){return sql.includes('provider_usage')?{used:1}:null},async run(){if(sql.includes('INSERT INTO section_research('))saved.push(String(values[1]));return{meta:{changes:1}}}}},async batch(){return[]}};
 const old=globalThis.fetch;globalThis.fetch=async(url)=>{requests.push(String(url));return Response.json({answer:'Provider fixture',results:[{title:'Official source',url:'https://example.org/source'}]})};
 try{await Promise.all(['eat','drink','play','clothing','essential','neighbourhood','stay','transport'].map(section=>runCitySection({DB:db,TAVILY_API_KEY:'fixture',EXA_API_KEY:'fixture',FIRECRAWL_API_KEY:'fixture'} as any,{slug:'test-city',name:'Test City',country:'Test',currency:'EUR',section})));assert.equal(saved.length,8);assert.equal(requests.filter(url=>url.includes('tavily')).length,3);assert.equal(requests.filter(url=>url.includes('firecrawl')).length,1);}finally{globalThis.fetch=old;}
});
