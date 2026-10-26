export async function readResearch(db:D1Database,slug:string,section:string):Promise<unknown|null>{
 const row=await db.prepare('SELECT response_json FROM section_research WHERE city_slug=? AND section=?').bind(slug,section).first<{response_json:string}>();
 if(!row)return null;
 const value=JSON.parse(row.response_json);
 if(value.storage!=='chunks')return value;
 if(!Number.isInteger(value.count)||value.count<1||value.count>1000||! /^[a-f0-9]{64}$/.test(value.version))throw new Error('Invalid research manifest');
 const chunks=await db.prepare('SELECT chunk_index,content FROM section_research_chunks WHERE city_slug=? AND section=? AND version=? ORDER BY chunk_index').bind(slug,section,value.version).all<{chunk_index:number;content:string}>();
 if(chunks.results.length!==value.count||chunks.results.some((chunk,index)=>chunk.chunk_index!==index))throw new Error('Research cache is incomplete');
 const serialized=chunks.results.map(chunk=>chunk.content).join('');
 const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(serialized));
 const hash=Array.from(new Uint8Array(digest),byte=>byte.toString(16).padStart(2,'0')).join('');
 if(hash!==value.version)throw new Error('Research cache integrity check failed');
 return JSON.parse(serialized);
}
