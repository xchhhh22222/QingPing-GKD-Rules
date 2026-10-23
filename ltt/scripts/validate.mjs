// Local checks: node ltt/scripts/validate.mjs
import fs from 'node:fs';
const read=name=>JSON.parse(fs.readFileSync(new URL('../rules/'+name,import.meta.url),'utf8'));
const hash=s=>[...s].reduce((h,c)=>(Math.imul(h,31)+c.charCodeAt(0))|0,0).toString();
const check=(rows,name)=>{
 if(!Array.isArray(rows))throw new Error(name+' must be array');
 const ids=new Set();
 for(let i=0;i<rows.length;i++){
  const e=Object.entries(rows[i]);
  if(e.length!==1)throw new Error(name+' row '+i+' must have one hashed key');
  const [key,json]=e[0];if(!/^-?\\d+$/.test(key)||ids.has(key))throw new Error(name+' invalid/duplicate key '+key);
  ids.add(key);
  if(typeof json!=='string')throw new Error(name+' rule must be JSON string '+key);
  const obj=JSON.parse(json);if(!obj||Array.isArray(obj)||typeof obj!=='object')throw new Error(name+' invalid rule '+key);
 }
 return ids;
};
const base=read('base-clean.json'),patch=read('browser-patch.json'),merged=read('full-merged.json');
const keys=[check(base,'base'),check(patch,'patch'),check(merged,'merged')];
if(base.length!==328||patch.length!==3||merged.length!==330)throw new Error('unexpected configuration counts');
if(hash('com.tencent.mtt')!=='-103524201')throw new Error('hash implementation wrong');
for(const key of keys[1]){
 const found=merged.find(x=>Object.hasOwn(x,key));
 if(!found||!JSON.parse(found[key]).keywords_append?.length)throw new Error('missing patch '+key);
}
console.log('PASS', {base:base.length,patch:patch.length,merged:merged.length});
