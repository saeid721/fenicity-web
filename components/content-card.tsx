import Link from 'next/link';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
export function ContentCard({item,resource}:{item:any;resource:string}){
 const meta=item.meta||{};
 const primary=meta.bloodGroup||meta.jobType||meta.kind||meta.designation||meta.level||meta.companyName||meta.instituteName;
 return <Link href={`/${resource}/${item.slug}`} className="card group block overflow-hidden transition hover:-translate-y-1.5 hover:shadow-xl">
  <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#e8f7fb] via-white to-[#eef5ff]">
   <div className="absolute inset-0 grid place-items-center text-5xl font-black text-[#0271B6]/10">FENI</div>
   <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold text-[#0271B6]">{primary||'Feni City'}</span>
  </div>
  <div className="p-5">
   <div className="flex items-start justify-between gap-3"><h2 className="text-lg font-black leading-snug">{item.title}</h2><ArrowUpRight size={18} className="mt-1 shrink-0 text-slate-400 transition group-hover:text-[#0271B6]"/></div>
   {item.excerpt&&<p className="muted mt-2 line-clamp-2 text-sm leading-6">{item.excerpt}</p>}
   {item.location?.address&&<p className="muted mt-3 flex gap-1.5 text-xs"><MapPin size={15} className="shrink-0"/>{item.location.address}</p>}
   {item.contacts?.[0]?.value&&<p className="mt-2 flex gap-1.5 text-xs font-bold text-[#0271B6]"><Phone size={14}/>{item.contacts[0].value}</p>}
  </div>
 </Link>
}
