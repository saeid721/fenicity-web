import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, ChevronRight, HeartPulse, Hotel, MapPinned, Search, ShieldCheck, Sparkles, Stethoscope, Utensils, Waves, Compass, PhoneCall, UsersRound, Droplets, Bus, Train, Car, Flame, Truck, Zap, Shield, ShoppingBag, KeyRound, Wrench, Lightbulb, GraduationCap, School, Scissors, Newspaper, Globe, Sprout } from 'lucide-react';
import { api } from '../lib/api';
import { ContentCard } from '../components/content-card';
import { resourceForType } from '../lib/resource';

type MenuItem = { slug: string; title?: string; label?: string; icon?: string; url?: string; sort_order?: number; image?: string };
type Banner = { title?: string; subtitle?: string; description?: string; image?: string; button_text?: string; button_url?: string; url?: string };
type HomeData = { featured?: any[]; banners?: Banner[]; menu?: MenuItem[]; sections?: any[]; settings?: Record<string, any> };

const fallbackMenu: MenuItem[] = [
  { slug: 'doctors', label: 'ডাক্তার', icon: 'doctor' },
  { slug: 'hospitals', label: 'হাসপাতাল', icon: 'hospital' },
  { slug: 'diagnostic-centers', label: 'ডায়াগনস্টিক', icon: 'diagnostic' },
  { slug: 'blood', label: 'রক্ত', icon: 'blood' },
  { slug: 'bus-schedule', label: 'বাসের সময়সূচী', icon: 'bus' },
  { slug: 'train-schedule', label: 'ট্রেনের সময়সূচী', icon: 'train' },
  { slug: 'car-rent', label: 'গাড়ি ভাড়া', icon: 'car' },
  { slug: 'customer-care', label: 'জরুরী সেবা', icon: 'emergency' },
  { slug: 'fire-station', label: 'ফায়ার সার্ভিস', icon: 'fire' },
  { slug: 'courier-service', label: 'কুরিয়ার সার্ভিস', icon: 'courier' },
  { slug: 'electricity-office', label: 'বিদ্যুৎ অফিস', icon: 'electricity' },
  { slug: 'police-station', label: 'থানা-পুলিশ', icon: 'police' },
  { slug: 'shopping-center', label: 'শপিং', icon: 'shopping' },
  { slug: 'room-rent', label: 'বাসা ভাড়া', icon: 'room' },
  { slug: 'hotels', label: 'হোটেল', icon: 'hotel' },
  { slug: 'restaurants', label: 'রেস্টুরেন্ট', icon: 'restaurant' },
  { slug: 'mistri', label: 'মিস্ত্রি', icon: 'mistri' },
  { slug: 'entrepreneur', label: 'উদ্যোক্তা', icon: 'entrepreneur' },
  { slug: 'teacher', label: 'শিক্ষক', icon: 'teacher' },
  { slug: 'education-institute', label: 'শিক্ষা প্রতিষ্ঠান', icon: 'education' },
  { slug: 'parlor', label: 'পার্লার', icon: 'parlor' },
  { slug: 'jobs', label: 'চাকরি', icon: 'job' },
  { slug: 'news', label: 'নিউজ', icon: 'news' },
  { slug: 'website', label: 'ওয়েবসাইট', icon: 'website' },
  { slug: 'tourist-places', label: 'দর্শনীয় স্থান', icon: 'tourism' },
  { slug: 'flat-land', label: 'ফ্ল্যাট ও জমি', icon: 'flat' },
  { slug: 'nursery', label: 'নার্সারি', icon: 'nursery' },
  { slug: 'videos', label: 'ভিডিও', icon: 'video' },
];

const iconMap: Record<string, any> = {
  doctor: Stethoscope,
  hospital: HeartPulse,
  diagnostic: ShieldCheck,
  blood: Droplets,
  bus: Bus,
  train: Train,
  car: Car,
  emergency: PhoneCall,
  fire: Flame,
  courier: Truck,
  electricity: Zap,
  police: Shield,
  shopping: ShoppingBag,
  room: KeyRound,
  hotel: Hotel,
  restaurant: Utensils,
  mistri: Wrench,
  entrepreneur: Lightbulb,
  teacher: GraduationCap,
  education: School,
  parlor: Scissors,
  job: BriefcaseBusiness,
  news: Newspaper,
  website: Globe,
  tourism: MapPinned,
  flat: Building2,
  nursery: Sprout,
  video: Waves,
};

const popularLinks = [
  ['/doctors', 'ডাক্তার খুঁজুন', Stethoscope],
  ['/hospitals', 'হাসপাতাল দেখুন', HeartPulse],
  ['/hotels', 'হোটেল বুকিং', Hotel],
  ['/restaurants', 'রেস্টুরেন্ট', Utensils],
  ['/jobs', 'চাকরি খুঁজুন', BriefcaseBusiness],
  ['/tourist-places', 'ফেনী ঘুরুন', Compass],
] as const;

function menuHref(item: MenuItem) {
  if (item.url) return item.url;
  return `/${item.slug}`;
}

export default async function Home() {
  let data: HomeData = {};
  try {
    data = (await api<HomeData>('/home')).data;
  } catch {
    data = {};
  }

  const menu = (data.menu?.length ? data.menu : fallbackMenu).slice(0, 40);
  const banners = data.banners?.length ? data.banners : [];
  const featured = data.featured || [];
  const hero = banners[0];
  const settings = data.settings || {};
  const heroTitle = hero?.title || settings.hero_title || 'ফেনী সিটি — আপনার শহর, এক জায়গায়।';
  const heroDescription = hero?.description || hero?.subtitle || settings.hero_description || 'চিকিৎসা, শিক্ষা, ব্যবসা, চাকরি, সেবা, পর্যটন ও স্থানীয় তথ্য—প্রয়োজনীয় সবকিছু সহজে খুঁজে নিন।';

  return (
    <div className="home-shell">
      <section className="hero-premium">
        {hero?.image && <div className="hero-image" style={{ backgroundImage: `url(${hero.image})` }} aria-hidden="true" />}
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-inner">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><Sparkles size={15} /> ফেনীর জন্য একটি স্মার্ট ডিজিটাল প্ল্যাটফর্ম</div>
            <h1>{heroTitle}</h1>
            <p>{heroDescription}</p>

            <form action="/search" className="hero-search" role="search">
              <Search size={20} aria-hidden="true" />
              <input name="q" placeholder="ডাক্তার, হাসপাতাল, হোটেল, চাকরি বা যেকোনো কিছু খুঁজুন..." aria-label="Search Feni City" />
              <button type="submit">খুঁজুন <ArrowRight size={16} /></button>
            </form>

            <div className="hero-actions">
              <Link href={hero?.button_url || '/search'} className="btn-premium primary"><Search size={18} />{hero?.button_text || 'সবকিছু খুঁজুন'}</Link>
              <Link href="/tourist-places" className="btn-premium secondary"><MapPinned size={18} />ফেনী ঘুরে দেখুন</Link>
            </div>
            <div className="hero-trust"><ShieldCheck size={17} /> স্থানীয় তথ্য এক জায়গায় • দ্রুত • সহজ • ব্যবহারবান্ধব</div>
          </div>

          <div className="hero-side reveal-up delay-1">
            <div className="hero-card" aria-label="Feni City quick access">
              <div className="hero-card-top"><span>দ্রুত অ্যাক্সেস</span><span className="live-dot" /> লাইভ প্ল্যাটফর্ম</div>
              <div className="hero-card-grid">
                {menu.slice(0, 6).map((item) => {
                  const Icon = iconMap[item.icon || ''] || ChevronRight;
                  return <Link key={item.slug} href={menuHref(item)} className="quick-item"><span className="quick-icon"><Icon size={20} /></span><span>{item.label || item.title || item.slug}</span><ChevronRight size={15} /></Link>;
                })}
              </div>
              <Link href="/search" className="hero-card-link">সব ক্যাটাগরি দেখুন <ArrowRight size={16} /></Link>
            </div>
            <div className="hero-mini-stats">
              <div><strong>{menu.length}+</strong><span>জনপ্রিয় ক্যাটাগরি</span></div>
              <div><strong>{featured.length || '—'}</strong><span>নির্বাচিত কনটেন্ট</span></div>
              <div><strong>24/7</strong><span>অনলাইন অ্যাক্সেস</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container trust-strip" aria-label="Platform benefits">
        <div><span className="trust-icon"><Search size={18} /></span><span><b>সহজে খুঁজুন</b><small>প্রয়োজনীয় তথ্য দ্রুত পান</small></span></div>
        <div><span className="trust-icon"><UsersRound size={18} /></span><span><b>স্থানীয় তথ্য</b><small>ফেনী-কেন্দ্রিক দরকারি তথ্য</small></span></div>
        <div><span className="trust-icon"><ShieldCheck size={18} /></span><span><b>বিশ্বস্ত অভিজ্ঞতা</b><small>পরিষ্কার ও ব্যবহারবান্ধব প্ল্যাটফর্ম</small></span></div>
        <div><span className="trust-icon"><PhoneCall size={18} /></span><span><b>যোগাযোগের সহজ পথ</b><small>প্রয়োজনীয় সেবায় দ্রুত পৌঁছান</small></span></div>
      </section>

      <section className="container services-section">
        <div className="section-heading">
          <div><span className="section-kicker">EXPLORE FENI</span><h2>আপনার প্রয়োজনীয় সেবা</h2><p>একটি পরিষ্কার, দ্রুত ও সহজ অভিজ্ঞতায় স্থানীয় সব গুরুত্বপূর্ণ তথ্য।</p></div>
          <Link href="/search" className="text-link">সবগুলো দেখুন <ArrowRight size={16} /></Link>
        </div>
        <div className="service-grid">
          {menu.map((item) => {
            const Icon = iconMap[item.icon || ''] || ChevronRight;
            return <Link key={item.slug} href={menuHref(item)} className="service-card"><span className="service-icon"><Icon size={22} /></span><span className="service-title">{item.label || item.title || item.slug}</span><span className="service-arrow"><ArrowRight size={15} /></span></Link>;
          })}
        </div>
      </section>

      <section className="popular-section">
        <div className="container">
          <div className="section-heading compact"><div><span className="section-kicker">POPULAR SEARCHES</span><h2>আজ কী খুঁজছেন?</h2><p>এক ক্লিকেই জনপ্রিয় সেবাগুলোতে পৌঁছে যান।</p></div></div>
          <div className="popular-grid">
            {popularLinks.map(([href, label, Icon]) => <Link href={href} key={href} className="popular-card"><span className="popular-icon"><Icon size={21} /></span><span>{label}</span><ArrowRight size={16} /></Link>)}
          </div>
        </div>
      </section>

      <section className="container how-section">
        <div className="section-heading"><div><span className="section-kicker">HOW IT WORKS</span><h2>তিন ধাপে প্রয়োজনীয় তথ্য</h2><p>আপনার প্রয়োজনীয় মানুষ, জায়গা, প্রতিষ্ঠান বা সেবা খুঁজে পাওয়া এখন আরও সহজ।</p></div></div>
        <div className="how-grid">
          <div className="how-card"><span className="step-no">01</span><span className="how-icon"><Search size={22} /></span><h3>খুঁজুন</h3><p>সার্চ বা ক্যাটাগরি থেকে আপনার প্রয়োজনীয় তথ্য নির্বাচন করুন।</p></div>
          <div className="how-card"><span className="step-no">02</span><span className="how-icon"><MapPinned size={22} /></span><h3>তথ্য দেখুন</h3><p>প্রতিষ্ঠান, ব্যক্তি, জায়গা বা সেবার বিস্তারিত তথ্য একসাথে দেখুন।</p></div>
          <div className="how-card"><span className="step-no">03</span><span className="how-icon"><CheckCircle2 size={22} /></span><h3>যোগাযোগ করুন</h3><p>প্রয়োজন অনুযায়ী যোগাযোগ, ভিজিট বা পরবর্তী পদক্ষেপ নিন।</p></div>
        </div>
      </section>

      {featured.length > 0 && <section className="featured-section">
        <div className="container">
          <div className="section-heading light"><div><span className="section-kicker">FROM FENI</span><h2>নির্বাচিত তথ্য ও আপডেট</h2><p>অ্যাডমিন প্যানেল থেকে প্রকাশিত সর্বশেষ গুরুত্বপূর্ণ কনটেন্ট।</p></div><Link href="/search" className="text-link">আরও দেখুন <ArrowRight size={16} /></Link></div>
          <div className="featured-grid">{featured.slice(0, 8).map((item: any) => <ContentCard key={item.id} item={item} resource={resourceForType(item.type)} />)}</div>
        </div>
      </section>}

      <section className="container local-banner">
        <div className="local-banner-copy"><span className="section-kicker">FENI, ALL IN ONE</span><h2>ফেনীর মানুষ ও ব্যবসার জন্য একটি ডিজিটাল ঠিকানা</h2><p>স্থানীয় ব্যবসা, পেশাজীবী, প্রতিষ্ঠান, সেবা, চাকরি ও দর্শনীয় স্থান—সবকিছুকে একটি আধুনিক ডিজিটাল অভিজ্ঞতায় নিয়ে আসার লক্ষ্য।</p><div className="local-points"><span><CheckCircle2 size={16} /> Local-first discovery</span><span><CheckCircle2 size={16} /> Mobile-friendly experience</span><span><CheckCircle2 size={16} /> Search-driven navigation</span></div></div>
        <div className="local-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core"><MapPinned size={34} /><b>FENI</b><small>City Guide</small></div></div>
      </section>

      <section className="container faq-section">
        <div className="section-heading"><div><span className="section-kicker">FAQ</span><h2>সাধারণ প্রশ্ন</h2><p>Feni City ব্যবহার করার আগে যেসব বিষয় জানা দরকার।</p></div></div>
        <div className="faq-grid">
          <details><summary>Feni City-তে কী কী তথ্য পাওয়া যাবে?</summary><p>ডাক্তার, হাসপাতাল, ডায়াগনস্টিক, হোটেল, রেস্টুরেন্ট, চাকরি, পর্যটনসহ বিভিন্ন স্থানীয় ক্যাটাগরির তথ্য পাওয়া যাবে।</p></details>
          <details><summary>কীভাবে কোনো প্রতিষ্ঠান বা সেবা খুঁজব?</summary><p>হোমপেজের সার্চ বক্স ব্যবহার করুন অথবা আপনার পছন্দের ক্যাটাগরি নির্বাচন করুন।</p></details>
          <details><summary>মোবাইল থেকে ব্যবহার করা যাবে?</summary><p>হ্যাঁ। প্ল্যাটফর্মটি মোবাইল, ট্যাবলেট ও ডেস্কটপ স্ক্রিনের জন্য responsiveভাবে তৈরি করা হয়েছে।</p></details>
          <details><summary>নিজের ব্যবসা বা প্রতিষ্ঠানের তথ্য যোগ করা যাবে?</summary><p>প্রযোজ্য হলে Contact বা সংশ্লিষ্ট submission flow ব্যবহার করে তথ্য যোগ করার বিষয়ে যোগাযোগ করতে পারেন।</p></details>
        </div>
      </section>

      <section className="container discover-banner">
        <div><span className="section-kicker">FENI CITY</span><h2>আপনার শহরকে আরও সহজে আবিষ্কার করুন।</h2><p>প্রয়োজনীয় মানুষ, জায়গা, প্রতিষ্ঠান ও সেবা—একটি trusted digital destination-এ।</p></div>
        <div className="discover-actions"><Link href="/search" className="btn-premium primary">এখনই খুঁজুন <Search size={17} /></Link><Link href="/contact" className="btn-premium secondary">যোগাযোগ করুন <ArrowRight size={17} /></Link></div>
      </section>
    </div>
  );
}
