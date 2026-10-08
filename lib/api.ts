import { allStaticItems, staticData, staticExternalLinks, type StaticItem } from './static-data';
export type ApiEnvelope<T>={success:boolean;message:string;data:T;meta?:Record<string,unknown>};
const ok=<T,>(data:T):ApiEnvelope<T>=>({success:true,message:'Static data',data});
export async function api<T>(path:string,_init:RequestInit={}):Promise<ApiEnvelope<T>>{
  const clean=path.split('?')[0].replace(/^\//,'');
  if(clean==='home') return ok(buildHome()) as ApiEnvelope<T>;
  if(clean==='search') { const q=new URLSearchParams(path.split('?')[1]||'').get('q')?.toLowerCase()||''; return ok(allStaticItems().filter(x=>[x.title,x.excerpt,x.location?.address,x.body].join(' ').toLowerCase().includes(q))) as ApiEnvelope<T>; }
  if(clean.startsWith('external-links')) { const cat=new URLSearchParams(path.split('?')[1]||'').get('category')||''; return ok((staticExternalLinks as any)[cat]||[]) as ApiEnvelope<T>; }
  if(clean.startsWith('pages/')) return ok({title:clean.slice(6),body:'Feni City-এর static information page.'}) as ApiEnvelope<T>;
  const parts=clean.split('/'); const resource=parts[0]; const slug=parts[1];
  if(slug){ const item=(staticData[resource]||[]).find(x=>x.slug===decodeURIComponent(slug)); if(!item) throw new Error('Not found'); return ok(item) as ApiEnvelope<T>; }
  return ok(staticData[resource]||[]) as ApiEnvelope<T>;
}
export const getResource=(resource:string)=>api<any[]>(`/${resource}`);
export const getItem=(resource:string,slug:string)=>api<any>(`/${resource}/${encodeURIComponent(slug)}`);
export const getExternalLinks=(category?:string)=>api<any[]>(`/external-links${category?`?category=${encodeURIComponent(category)}`:''}`);
export const getPage=(slug:string)=>api<any>(`/pages/${encodeURIComponent(slug)}`);

function buildHome(){
 const featured=['hospitals','hotels','restaurants','tourist-places'].flatMap(k=>staticData[k]||[]).slice(0,6);
 return {menu:[],featured,banners:[{title:'ফেনী সিটি — আপনার শহর, এক জায়গায়।',description:'চিকিৎসা, শিক্ষা, ব্যবসা, চাকরি, সেবা, পর্যটন ও স্থানীয় তথ্য—প্রয়োজনীয় সবকিছু সহজে খুঁজে নিন।',button_text:'সবকিছু খুঁজুন',button_url:'/search'}],settings:{hero_title:'ফেনী সিটি — আপনার শহর, এক জায়গায়।',hero_description:'ফেনী জেলার প্রয়োজনীয় স্থানীয় তথ্য, সেবা ও প্রতিষ্ঠান এক জায়গায় খুঁজে নিন।'}};
}
