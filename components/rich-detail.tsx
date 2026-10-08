import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, CalendarDays, CheckCircle2, Globe2, Hotel, Mail, MapPin, Phone, Stethoscope, UserRound } from 'lucide-react';

const pick=(obj:any, keys:string[])=>{for(const key of keys){const v=key.split('.').reduce((a,k)=>a?.[k],obj); if(v!==undefined&&v!==null&&String(v).trim()) return v;}return ''};
const arr=(obj:any, keys:string[])=>{for(const key of keys){const v=key.split('.').reduce((a,k)=>a?.[k],obj); if(Array.isArray(v)&&v.length)return v;}return [];};
const text=(v:any)=>typeof v==='string'?v:(v?.name||v?.title||v?.label||'');

function Section({title,children}:{title:string;children:ReactNode}){return <section className="detail-section"><div className="detail-section-head"><span></span><h2>{title}</h2></div>{children}</section>}
function List({items}:{items:any[]}){return <div className="detail-list">{items.map((x,i)=><div className="detail-list-item" key={x.id||i}><CheckCircle2 size={17}/><div><strong>{text(x)||`তথ্য ${i+1}`}</strong>{typeof x==='object'&&pick(x,['description','details','address','designation','department'])&&<small>{pick(x,['description','details','address','designation','department'])}</small>}</div></div>)}</div>}
function ContactActions({item}:any){const phone=pick(item,['contacts.0.value','phone','mobile']); const address=pick(item,['location.address','address']); const website=pick(item,['website','website_url']); return <div className="detail-actions">{phone&&<a href={`tel:${phone}`} className="detail-action primary"><Phone size={17}/> কল করুন</a>}{phone&&<a href={`sms:${phone}`} className="detail-action"><Mail size={17}/> এস.এম.এস</a>}{address&&<a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" className="detail-action"><MapPin size={17}/> ম্যাপ</a>}{website&&<a href={website} target="_blank" rel="noreferrer" className="detail-action"><Globe2 size={17}/> ওয়েবসাইট</a>}</div>}

export function RichDetail({resource,item}:{resource:string;item:any}){
 const media=item.media||[]; const title=item.title||item.name||'Feni City'; const desc=item.excerpt||item.description||item.short_description||''; const body=item.body||item.details||'';
 const departments=arr(item,['departments','hospital.departments','meta.departments']); const doctors=arr(item,['doctors','hospital.doctors','meta.doctors']); const staff=arr(item,['staff','employees','meta.staff']); const management=arr(item,['management','managers','meta.management']); const facilities=arr(item,['facilities','services','features','amenities']); const rooms=arr(item,['rooms','room_types']); const gallery=media.length>1?media:[];
 const icon=resource==='hotels'?<Hotel size={20}/>:resource==='doctors'?<Stethoscope size={20}/>:<Building2 size={20}/>;
 return <article className="detail-page">
  <div className="detail-hero"><div className="container"><Link href={`/${resource}`} className="back-link"><ArrowLeft size={16}/> ফিরে যান</Link><div className="detail-kicker">{icon}<span>FENI CITY • {resource.replaceAll('-',' ')}</span></div><h1>{title}</h1>{desc&&<p>{desc}</p>}<ContactActions item={item}/></div></div>
  <div className="container detail-content">
   {media[0]?.path&&<div className="detail-cover"><img src={media[0].path} alt={media[0].alt_text||title}/></div>}
   {gallery.length>0&&<Section title="ছবি গ্যালারি"><div className="detail-gallery">{gallery.map((m:any,i:number)=><img key={m.id||i} src={m.path} alt={m.alt_text||`${title} ${i+1}`}/>)}</div></Section>}
   <div className="detail-grid">
    <div>
      {body&&<Section title="সংক্ষিপ্ত বিবরণ"><div className="detail-copy">{body}</div></Section>}
      {departments.length>0&&<Section title="বিভাগসমূহ"><List items={departments}/></Section>}
      {doctors.length>0&&<Section title="ডাক্তার তালিকা"><List items={doctors}/></Section>}
      {staff.length>0&&<Section title="স্টাফ তালিকা"><List items={staff}/></Section>}
      {management.length>0&&<Section title="ম্যানেজমেন্ট"><List items={management}/></Section>}
      {facilities.length>0&&<Section title="সেবা ও সুবিধাসমূহ"><List items={facilities}/></Section>}
      {rooms.length>0&&<Section title="রুম / আবাসন"><List items={rooms}/></Section>}
    </div>
    <aside className="detail-aside">
      <div className="detail-info-card"><h2>গুরুত্বপূর্ণ তথ্য</h2>{pick(item,['location.address','address','area','thana'])&&<p><MapPin size={17}/>{pick(item,['location.address','address','area','thana'])}</p>}{pick(item,['phone','contacts.0.value','mobile'])&&<p><Phone size={17}/>{pick(item,['phone','contacts.0.value','mobile'])}</p>}{pick(item,['email','contacts.1.value'])&&<p><Mail size={17}/>{pick(item,['email','contacts.1.value'])}</p>}{pick(item,['established_at','established','opening_date'])&&<p><CalendarDays size={17}/>{pick(item,['established_at','established','opening_date'])}</p>}</div>
      <div className="detail-info-card"><h2>আরও তথ্য</h2><p>ঠিকানা, যোগাযোগ, সেবা, ছবি এবং প্রয়োজনীয় তথ্য এক জায়গায় দেখুন।</p></div>
    </aside>
   </div>
  </div>
 </article>
}
