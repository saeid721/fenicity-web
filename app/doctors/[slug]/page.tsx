import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronRight, MapPin, Phone, Stethoscope } from 'lucide-react';
import { getItem, getResource } from '../../../lib/api';
import { doctorMatchesSpecialty, doctorSpecialties, getSpecialty, relatedSpecialties } from '../../../lib/doctor-specialties';

type Params = { slug: string };

export function generateStaticParams() {
  return doctorSpecialties.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (specialty) {
    return { title: specialty.title, description: specialty.summary };
  }
  try {
    const item = (await getItem('doctors', slug)).data as { title?: string; excerpt?: string; seo?: Record<string, string> };
    return { title: item.seo?.meta_title || item.title, description: item.seo?.meta_description || item.excerpt };
  } catch {
    return { title: 'ডাক্তার' };
  }
}

function matches(doctor: Record<string, unknown>, specialtySlug: string) {
  const specialty = getSpecialty(specialtySlug);
  return specialty ? doctorMatchesSpecialty(doctor, specialty) : false;
}

export default async function DoctorSpecialtyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);

  if (!specialty) {
    let item: any = null;
    try { item = (await getItem('doctors', slug)).data; } catch {}
    if (!item) notFound();
    const image = item.media?.[0]?.path;
    return (
      <article className="container doc-profile">
        <Link href="/doctors" className="doc-back"><ArrowLeft size={16} /> সব বিশেষজ্ঞতা</Link>
        {image && <div className="doc-profile-media"><img src={image} alt={item.media?.[0]?.alt_text || item.title} /></div>}
        <h1>{item.title}</h1>
        {item.excerpt && <p className="doc-lead">{item.excerpt}</p>}
        {item.location?.address && <p className="doc-meta"><MapPin size={16} />{item.location.address}</p>}
        <div className="doc-body-text">{item.body}</div>
        {item.contacts?.length > 0 && (
          <div className="doc-contacts">
            {item.contacts.map((c: any) => (
              <a key={c.id || c.value} href={`tel:${c.value}`} className="doc-contact"><Phone size={16} />{c.label || 'যোগাযোগ'}: {c.value}</a>
            ))}
          </div>
        )}
      </article>
    );
  }

  let doctors: any[] = [];
  try {
    const all = (await getResource('doctors')).data || [];
    const filtered = all.filter((item: Record<string, unknown>) => matches(item, slug));
    doctors = filtered.length ? filtered : all.filter((item: any) => String(item.specialty_slug || item.category || '') === slug);
  } catch {}

  const related = relatedSpecialties(slug);

  return (
    <div className="doc-detail">
      <section className="doc-detail-hero">
        <div className="container">
          <Link href="/doctors" className="doc-back"><ArrowLeft size={16} /> সব বিশেষজ্ঞতা</Link>
          <p className="section-kicker">SPECIALTY</p>
          <h1>{specialty.title}</h1>
          <p className="doc-en">{specialty.titleEn}</p>
          <p className="doc-lead">{specialty.summary}</p>
        </div>
      </section>

      <section className="container doc-detail-body">
        <div className="doc-care-card">
          <h2>এই বিশেষজ্ঞ কীসে সাহায্য করেন</h2>
          <ul>
            {specialty.cares.map((item) => (
              <li key={item}><CheckCircle2 size={18} />{item}</li>
            ))}
          </ul>
        </div>

        <div className="doc-list-head">
          <div>
            <h2>ফেনীর {specialty.title}</h2>
            <p>{doctors.length ? `${doctors.length} জন ডাক্তার পাওয়া গেছে` : 'তালিকাভুক্ত ডাক্তার দেখুন বা পরে আবার চেষ্টা করুন'}</p>
          </div>
        </div>

        {doctors.length ? (
          <div className="doc-doctor-grid">
            {doctors.map((item: any) => (
              <Link key={item.id || item.slug} href={`/doctors/${item.slug}`} className="doc-doctor-card">
                <div className="doc-doctor-media">
                  {item.media?.[0]?.path ? <img src={item.media[0].path} alt={item.title} /> : <Stethoscope size={28} />}
                </div>
                <div className="doc-doctor-copy">
                  <strong>{item.title}</strong>
                  <small>{item.excerpt || specialty.titleEn}</small>
                  {item.location?.address && <span><MapPin size={14} />{item.location.address}</span>}
                </div>
                <ChevronRight size={18} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="doc-empty">এই মুহূর্তে এই বিশেষজ্ঞতার কোনো প্রকাশিত ডাক্তার পাওয়া যায়নি। অন্য স্পেশালিটি দেখুন অথবা পরে আবার চেক করুন।</div>
        )}

        <div className="doc-related">
          <h2>সম্পর্কিত বিশেষজ্ঞতা</h2>
          <div className="doc-related-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/doctors/${item.slug}`} className="doc-related-card">
                <strong>{item.title}</strong>
                <small>{item.titleEn}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
