// A compact presentation projection; the complete immutable response remains archived.
export function researchPreview(input:unknown):unknown{
 if(!input||typeof input!=='object')return input;
 const raw=input as Record<string,unknown>;
 if(raw.response)return {city:raw.city,response:researchPreview(raw.response)};
 function sources(rows:unknown){return Array.isArray(rows)?rows.map(value=>{
  const row=value as Record<string,unknown>;
  return {title:row.title,url:row.url,content:typeof row.content==='string'?row.content.slice(0,1200):undefined,description:typeof row.description==='string'?row.description.slice(0,1200):undefined,highlights:Array.isArray(row.highlights)?row.highlights.filter(x=>typeof x==='string').map(x=>x.slice(0,1200)).slice(0,3):undefined,error:row.error,metadata:row.metadata?{statusCode:(row.metadata as Record<string,unknown>).statusCode}:undefined};
 }):undefined;}
 return {answer:raw.answer,citations:sources(raw.citations),results:sources(raw.results),web:sources(raw.web),data:raw.data?{web:sources((raw.data as Record<string,unknown>).web)}:undefined};
}
