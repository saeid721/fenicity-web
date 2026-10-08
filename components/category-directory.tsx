'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { staticData } from '../lib/static-data';

export function CategoryDirectory({resource,title,description,tabs,metaKey}:{resource:string;title:string;description:string;tabs:{key:string;label:string}[];metaKey:string}){
 const [active,setActive]=useState(tabs[0]?.key||'all');
 const items=(staticData[resource]||[]).filter(x=>active==='all'||String(x.meta?.[metaKey]||'').toLowerCase().includes(active.toLowerCase()));
 return <section className="container py-10"><span className="section-kicker">FENI CITY DIRECTORY</span><h1 className="mt-2 text-3xl font-black md:text-4xl">{title}</h1><p className="muted mt-3 max-w-3xl leading-7">{description}</p><div className="directory-tabs">{tabs.map(t=><button key={t.key} onClick={()=>setActive(t.key)} className={active===t.key?'active':''}>{t.label}</button>)}</div><p className="muted mt-5 text-sm">{items.length}টি তথ্য • বিস্তারিত দেখতে কার্ডে ক্লিক করুন</p><div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(x=><Link key={x.slug} href={`/${resource}/${x.slug}`} className="card group overflow-hidden"><div className="directory-cover"><span className="text-4xl font-black text-[#0271B6]/20">FENI</span></div><div className="p-5"><div className="flex justify-between gap-3"><h2 className="text-lg font-black">{x.title}</h2><ArrowUpRight size={18}/></div><p className="muted mt-2 text-sm leading-6">{x.excerpt}</p><p className="muted mt-3 flex gap-1.5 text-xs"><MapPin size={15}/>{x.location?.address}</p>{x.contacts?.[0]?.value&&<p className="mt-2 flex gap-1.5 text-xs font-bold text-[#0271B6]"><Phone size={14}/>{x.contacts[0].value}</p>}</div></Link>)}</div></section>
}
