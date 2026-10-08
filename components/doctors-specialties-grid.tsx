'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  Apple,
  Baby,
  Bone,
  Brain,
  Briefcase,
  Bug,
  Dna,
  Droplets,
  Dumbbell,
  Ear,
  Eye,
  Flower2,
  Heart,
  HeartHandshake,
  HeartPulse,
  Leaf,
  Microscope,
  Pill,
  Scan,
  ScanFace,
  Scissors,
  Search,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Thermometer,
  Trophy,
  Users,
  Wind,
  type LucideIcon,
} from 'lucide-react';
import { doctorSpecialties, specialtyGroups, type SpecialtyGroup } from '../lib/doctor-specialties';

const iconMap: Record<string, LucideIcon> = {
  medicine: Stethoscope,
  pediatrician: Baby,
  nephrologist: Droplets,
  neurologist: Brain,
  gastroenterologist: Activity,
  pulmonologist: Wind,
  endocrinologist: Pill,
  ent: Ear,
  gynecologist: Heart,
  fertility_specialist: Flower2,
  sexologist: HeartHandshake,
  obstetrician: Baby,
  hematologist: Droplets,
  rheumatologist: Bone,
  toxicologist: AlertTriangle,
  cardiologist: HeartPulse,
  cardiothoracic_surgeon: HeartPulse,
  orthopedic_surgeon: Bone,
  cosmetic_surgeon: Sparkles,
  plastic_surgeon: Scissors,
  transplant_surgeon: Activity,
  neurosurgeon: Brain,
  general_surgeon: Syringe,
  aesthetician: Sparkles,
  dermatologist: ScanFace,
  allergist: Leaf,
  psychiatrist: Brain,
  psychologist: Smile,
  oncologist: ShieldCheck,
  urologist: Droplets,
  radiologist: Scan,
  pathologist: Microscope,
  dentist: Smile,
  geriatrician: Users,
  physiotherapist: Dumbbell,
  ophthalmologist: Eye,
  clinical_geneticist: Dna,
  nutritionist: Apple,
  critical_care: Activity,
  public_health: Users,
  emergency_medicine: AlertTriangle,
  preventive_medicine: ShieldCheck,
  infectious_disease: Bug,
  sports_medicine: Trophy,
  pain_management: Thermometer,
  palliative_care: HeartHandshake,
  occupational_medicine: Briefcase,
  child_development: Baby,
  homeopathy: Leaf,
};

export function DoctorsSpecialtiesGrid() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState<SpecialtyGroup | 'all'>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctorSpecialties.filter((item) => {
      const groupOk = group === 'all' || item.group === group;
      if (!groupOk) return false;
      if (!q) return true;
      return item.title.includes(query.trim())
        || item.titleEn.toLowerCase().includes(q)
        || item.slug.replace(/_/g, ' ').includes(q)
        || item.summary.includes(query.trim());
    });
  }, [query, group]);

  return (
    <div className="doc-hub">
      <section className="doc-hero">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="container doc-hero-inner">
          <p className="section-kicker">FENI MEDICAL DIRECTORY</p>
          <h1>বিশেষজ্ঞ ডাক্তার খুঁজুন</h1>
          <p>আপনার প্রয়োজন অনুযায়ী স্পেশালিটি বেছে নিন। ক্লিক করলে সেই বিভাগের বিস্তারিত ও ফেনীর ডাক্তার তালিকা দেখতে পাবেন।</p>
          <label className="doc-search">
            <Search size={18} aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="মেডিসিন, কার্ডিওলজিস্ট, ডেন্টিস্ট..."
              aria-label="বিশেষজ্ঞতা খুঁজুন"
            />
          </label>
          <div className="doc-stats">
            <span><b>{doctorSpecialties.length}</b> বিশেষজ্ঞতা</span>
            <span><b>ফেনী</b> ভিত্তিক তথ্য</span>
            <span><b>১ ক্লিক</b> বিস্তারিত</span>
          </div>
        </div>
      </section>

      <section className="container doc-body">
        <div className="doc-filters" role="tablist" aria-label="Specialty groups">
          <button type="button" className={group === 'all' ? 'is-active' : ''} onClick={() => setGroup('all')}>সব</button>
          {specialtyGroups.map((item) => (
            <button key={item.id} type="button" className={group === item.id ? 'is-active' : ''} onClick={() => setGroup(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <p className="doc-count">{filtered.length}টি স্পেশালিটি পাওয়া গেছে</p>

        {filtered.length ? (
          <div className="doc-grid">
            {filtered.map((item) => {
              const Icon = iconMap[item.slug] || Stethoscope;
              return (
                <Link key={item.slug} href={`/doctors/${item.slug}`} className="doc-card">
                  <span className="doc-icon"><Icon size={22} /></span>
                  <span className="doc-card-copy">
                    <strong>{item.title}</strong>
                    <small>{item.titleEn}</small>
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="doc-empty">এই খোঁজে কোনো বিশেষজ্ঞতা পাওয়া যায়নি। অন্য নাম দিয়ে চেষ্টা করুন।</div>
        )}
      </section>
    </div>
  );
}
