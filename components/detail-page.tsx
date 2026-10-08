import Link from 'next/link';
import { ArrowLeft, CheckCircle2, MapPin, Phone, Mail, Clock3, ExternalLink } from 'lucide-react';
import { getItem } from '../lib/api';

const labels:Record<string,string>={departments:'বিভাগ',doctors:'ডাক্তার',staff:'স্টাফ',management:'ম্যানেজমেন্ট',facilities:'সুবিধা ও সেবা',rooms:'রুম',services:'সেবা',cuisine:'খাবারের ধরন',features:'ফিচার',categories:'ক্যাটাগরি',subject:'বিষয়',products:'পণ্য',highlights:'আকর্ষণ',vehicles:'গাড়ির ধরন'};
const singular={bloodGroup:'রক্তের গ্রুপ',availability:'প্রাপ্যতা',lastDonation:'সর্বশেষ রক্তদান',degree:'ডিগ্রি',designation:'পদবি',chamber:'চেম্বার',companyName:'প্রতিষ্ঠান',jobType:'চাকরির ধরন',salary:'বেতন',applicationDeadline:'আবেদনের শেষ তারিখ',size:'আয়তন',bedroom:'বেডরুম',amount:'মূল্য/ভাড়া',date:'তারিখ',level:'শিক্ষার স্তর',established:'প্রতিষ্ঠিত',bestTime:'ভ্রমণের উপযুক্ত সময়',instituteName:'প্রতিষ্ঠানের নাম',source:'উৎস',hotline:'হটলাইন'} as Record<string,string>;

export async function DetailPage({resource,slug}:{resource:string;slug:string}){
 let item:any=null; try{item=(await getItem(resource,slug)).data}catch{}
 if(!item)return <section className="container py-16"><div className="card p-12 text-center"><h1 className="text-2xl font-black">তথ্য পাওয়া যায়নি</h1><p className="muted mt-2">এই তথ্যটি static directory-তে নেই।</p></div></section>;
 const meta=item.meta||{}; const gallery=Array.from({length:3},(_,i)=>i);
 return <article className="pb-16">
  <section className="detail-hero"><div className="container"><Link href={`/${resource}`} className="detail-back"><ArrowLeft size={16}/> তালিকায় ফিরে যান</Link><span className="section-kicker">FENI CITY DIRECTORY</span><h1>{item.title}</h1>{item.excerpt&&<p>{item.excerpt}</p>}<div className="detail-location"><MapPin size={16}/>{item.location?.address||'ফেনী, বাংলাদেশ'}</div></div></section>
  <div className="container detail-wrap">
   <section className="detail-gallery" aria-label="Gallery">{gallery.map((_,i)=><div key={i} className="gallery-tile"><span>FENI CITY</span><small>{i===0?'প্রধান ছবি':`গ্যালারি ${i+1}`}</small></div>)}</section>
   <div className="detail-actions">{item.contacts?.[0]?.value&&<a href={`tel:${item.contacts[0].value}`} className="btn-premium primary"><Phone size={17}/> কল করুন</a>}<a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location?.address||item.title)}`} target="_blank" rel="noreferrer" className="btn-premium secondary"><MapPin size={17}/> ম্যাপ</a></div>
   <div className="detail-grid">
    <main>
     <section className="detail-card"><h2>সংক্ষিপ্ত তথ্য</h2><p className="detail-body">{item.body}</p></section>
     {Object.entries(meta).filter(([k,v])=>Array.isArray(v)&&v.length).map(([key,value]:any)=><section className="detail-card" key={key}><h2>{labels[key]||key}</h2><div className="detail-list">{value.map((v:string)=><div key={v}><CheckCircle2 size={17}/><span>{v}</span></div>)}</div></section>)}
    </main>
    <aside>
     <section className="detail-card"><h2>প্রয়োজনীয় তথ্য</h2><div className="info-list">{Object.entries(meta).filter(([k,v])=>!Array.isArray(v)&&v!=null).map(([key,value]:any)=><div key={key}><span>{singular[key]||key}</span><strong>{String(value)}</strong></div>)}</div></section>
     <section className="detail-card"><h2>যোগাযোগ</h2><div className="contact-list">{(item.contacts||[]).map((c:any)=><a key={c.id||c.value} href={`tel:${c.value}`}><Phone size={16}/><span><small>{c.label}</small><b>{c.value}</b></span></a>)}<div><MapPin size={16}/><span><small>ঠিকানা</small><b>{item.location?.address}</b></span></div></div></section>
    </aside>
   </div>
  </div>
 </article>
}
