import type { Metadata } from 'next';
import { DoctorsSpecialtiesGrid } from '../../components/doctors-specialties-grid';

export const metadata: Metadata = {
  title: 'ডাক্তার',
  description: 'ফেনীর মেডিসিন, কার্ডিওলজিস্ট, গাইনোকোলজিস্টসহ সব বিশেষজ্ঞ ডাক্তারের স্পেশালিটি খুঁজুন।',
};

export default function DoctorsPage() {
  return <DoctorsSpecialtiesGrid />;
}
