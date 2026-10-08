'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowUpRight, Building2, Hotel, MapPin, Phone, Search, Stethoscope, UserRound } from 'lucide-react';

function value(item:any, keys:string[]){for(const key of keys){const v=key.split('.').reduce((a,k)=>a?.[k],item); if(v!==undefined&&v!==null&&String(v).trim()) return v;} return '';}
function category(item:any){return String(value(item,['category','ownership','hospital_type','type','meta.category','meta.ownership','is_private','government'])||'').toLowerCase();}

export function DirectoryGrid({items,resource,tabs=[]}:{items:any[];resource:string;tabs?:{label:string;value:string}[]}){
 const [q,setQ]=useState(''); const [tab,setTab]=useState(tabs[0]?.value||'all');
 const filtered=useMemo(()=>items.filter(item=>{const hay=JSON.stringify(item).toLowerCase(); const matches=!q||hay.includes(q.toLowerCase()); if(tab==='all') return matches; const c=category(item); return matches && (c.includes(tab.toLowerCase()) || (tab==='government' && (c.includes('gov')||c.includes('সরকার'))) || (tab==='private' && (c.includes('private')||c.includes('বেসরকারি'))));}),[items,q,tab]);
 return <>
   <div className="directory-tools"><div className="directory-search"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="নাম, এলাকা, ঠিকানা বা সেবা খুঁজুন..."/></div>{tabs.length>0&&<div className="directory-tabs">{tabs.map(t=><button key={t.value} className={tab===t.value?'active':''} onClick={()=>setTab(t.value)}>{t.label}</button>)}</div>}</div>
   {filtered.length?<div className="directory-grid">{filtered.map(item=><DirectoryCard key={item.id||item.slug} item={item} resource={resource}/>)}</div>:<div className="empty-state">আপনার খোঁজার সঙ্গে মিলে কোনো তথ্য পাওয়া যায়নি।</div>}
 </>;
}

function DirectoryCard({item,resource}:{item:any;resource:string}){
 const image=item.media?.[0]?.path; const address=value(item,['location.address','address','area','thana']); const phone=value(item,['contacts.0.value','phone','mobile']);
 const Icon=resource==='hotels'?Hotel:resource==='doctors'?Stethoscope:resource==='hospitals'?Building2:UserRound;
 return <Link href={`/${resource}/${item.slug||item.id}`} className="directory-card">
   <div className="directory-card-media">{image?<img src={image} alt={item.media?.[0]?.alt_text||item.title||'Feni City'} />:<div className="directory-placeholder"><Icon size={30}/></div>}<span className="directory-badge">{resource.replaceAll('-',' ')}</span></div>
   <div className="directory-card-body"><h2>{item.title||item.name}</h2>{address&&<p><MapPin size={15}/>{address}</p>}{phone&&<p><Phone size={15}/>{phone}</p>}<span className="directory-more">বিস্তারিত দেখুন <ArrowUpRight size={16}/></span></div>
 </Link>;
}
