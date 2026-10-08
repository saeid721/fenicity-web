export type SpecialtyGroup =
  | 'medical'
  | 'women'
  | 'surgery'
  | 'skin'
  | 'mind'
  | 'diagnostics'
  | 'support'
  | 'public';

export type DoctorSpecialty = {
  slug: string;
  title: string;
  titleEn: string;
  group: SpecialtyGroup;
  summary: string;
  cares: string[];
};

export const specialtyGroups: { id: SpecialtyGroup; label: string }[] = [
  { id: 'medical', label: 'মেডিকেল' },
  { id: 'women', label: 'নারী স্বাস্থ্য' },
  { id: 'surgery', label: 'সার্জারি' },
  { id: 'skin', label: 'ত্বক ও এস্থেটিক' },
  { id: 'mind', label: 'মানসিক স্বাস্থ্য' },
  { id: 'diagnostics', label: 'ডায়াগনসিস' },
  { id: 'support', label: 'সহায়ক সেবা' },
  { id: 'public', label: 'জরুরি ও পাবলিক হেলথ' },
];

export const doctorSpecialties: DoctorSpecialty[] = [
  { slug: 'medicine', title: 'মেডিসিন', titleEn: 'Medicine Specialist', group: 'medical', summary: 'সাধারণ অসুস্থতা, জ্বর, ডায়াবেটিস, প্রেশারসহ অভ্যন্তরীণ রোগ নির্ণয় ও চিকিৎসায় মেডিসিন বিশেষজ্ঞ সাহায্য করেন।', cares: ['জ্বর, ইনফেকশন ও সাধারণ অসুস্থতা', 'ডায়াবেটিস ও উচ্চ রক্তচাপ', 'দীর্ঘমেয়াদি অভ্যন্তরীণ রোগ ব্যবস্থাপনা'] },
  { slug: 'pediatrician', title: 'পেডিয়াট্রিশিয়ান', titleEn: 'Pediatrician', group: 'medical', summary: 'নবজাতক থেকে কিশোর বয়স পর্যন্ত শিশুদের বৃদ্ধি, টিকা, পুষ্টি ও রোগের চিকিৎসায় পেডিয়াট্রিশিয়ান বিশেষজ্ঞ।', cares: ['শিশুর জ্বর, সর্দি ও ইনফেকশন', 'বৃদ্ধি, পুষ্টি ও টিকা', 'শিশু বিকাশ সংক্রান্ত পরামর্শ'] },
  { slug: 'nephrologist', title: 'নেফ্রোলজিস্ট', titleEn: 'Nephrologist', group: 'medical', summary: 'কিডনি রোগ, কিডনি ফেইলিউর, ডায়ালাইসিস ও প্রস্রাবজনিত জটিলতা নিয়ে নেফ্রোলজিস্ট কাজ করেন।', cares: ['কিডনি ফাংশন ও ক্রনিক কিডনি ডিজিজ', 'ডায়ালাইসিস সংক্রান্ত পরামর্শ', 'প্রস্রাব ও ইলেকট্রোলাইট সমস্যা'] },
  { slug: 'neurologist', title: 'নিউরোলজিস্ট', titleEn: 'Neurologist', group: 'medical', summary: 'মাথাব্যথা, স্ট্রোক, খিঁচুনি, পারকিনসনসহ স্নায়ুতন্ত্রের রোগ নির্ণয় ও চিকিৎসায় নিউরোলজিস্ট সাহায্য করেন।', cares: ['মাইগ্রেন ও দীর্ঘস্থায়ী মাথাব্যথা', 'স্ট্রোক ও খিঁচুনি', 'স্নায়ুর দুর্বলতা ও কম্পন'] },
  { slug: 'gastroenterologist', title: 'গ্যাস্ট্রোএন্টারোলজিস্ট', titleEn: 'Gastroenterologist', group: 'medical', summary: 'পাকস্থলী, লিভার, অন্ত্র ও হজমজনিত সমস্যার বিশেষজ্ঞ চিকিৎসা দেন গ্যাস্ট্রোএন্টারোলজিস্ট।', cares: ['গ্যাস, আলসার ও অ্যাসিডিটি', 'লিভার ও পিত্তথলির সমস্যা', 'কোষ্ঠকাঠিন্য ও ডায়রিয়া'] },
  { slug: 'pulmonologist', title: 'পালমোনোলজিস্ট', titleEn: 'Pulmonologist', group: 'medical', summary: 'হাঁপানি, নিউমোনিয়া, সিওপিডি ও ফুসফুসের অন্যান্য রোগে পালমোনোলজিস্ট বিশেষজ্ঞ সেবা দেন।', cares: ['হাঁপানি ও শ্বাসকষ্ট', 'কাশি ও ব্রংকাইটিস', 'ফুসফুসের সংক্রমণ'] },
  { slug: 'endocrinologist', title: 'এন্ডোক্রাইনোলজিস্ট', titleEn: 'Endocrinologist', group: 'medical', summary: 'হরমোন, থাইরয়েড, ডায়াবেটিস ও মেটাবলিক রোগের বিশেষজ্ঞ চিকিৎসা দেন এন্ডোক্রাইনোলজিস্ট।', cares: ['ডায়াবেটিস নিয়ন্ত্রণ', 'থাইরয়েড সমস্যা', 'হরমোনজনিত ভারসাম্যহীনতা'] },
  { slug: 'ent', title: 'ইএনটি স্পেশালিস্ট', titleEn: 'ENT Specialist', group: 'medical', summary: 'কান, নাক, গলা ও সাইনাসজনিত সমস্যার নির্ণয় ও চিকিৎসায় ইএনটি বিশেষজ্ঞ সাহায্য করেন।', cares: ['কানের ব্যথা ও শ্রবণ সমস্যা', 'নাক বন্ধ ও সাইনাস', 'গলা ব্যথা ও টনসিল'] },
  { slug: 'gynecologist', title: 'গাইনোকোলজিস্ট', titleEn: 'Gynecologist', group: 'women', summary: 'নারীর প্রজনন স্বাস্থ্য, মাসিক সমস্যা, পিসিওএস ও স্ত্রীরোগ সংক্রান্ত সেবায় গাইনোকোলজিস্ট বিশেষজ্ঞ।', cares: ['মাসিক ও হরমোনজনিত সমস্যা', 'পিসিওএস ও ইনফেকশন', 'নারী প্রজনন স্বাস্থ্য পরীক্ষা'] },
  { slug: 'fertility_specialist', title: 'ফার্টিলিটি স্পেশালিস্ট', titleEn: 'Fertility Specialist', group: 'women', summary: 'বন্ধ্যাত্ব, গর্ভধারণে জটিলতা ও ফার্টিলিটি ট্রিটমেন্টে ফার্টিলিটি স্পেশালিস্ট পরামর্শ দেন।', cares: ['গর্ভধারণে দেরি', 'আইভিএফ ও ফার্টিলিটি মূল্যায়ন', 'প্রজনন স্বাস্থ্য পরিকল্পনা'] },
  { slug: 'sexologist', title: 'সেক্সোলজিস্ট', titleEn: 'Sexologist', group: 'women', summary: 'যৌন স্বাস্থ্য, সম্পর্ক ও প্রজনন সংক্রান্ত গোপনীয় পরামর্শ ও চিকিৎসায় সেক্সোলজিস্ট সাহায্য করেন।', cares: ['যৌন স্বাস্থ্য সমস্যা', 'গোপনীয় পরামর্শ', 'সম্পর্ক ও প্রজনন সহায়তা'] },
  { slug: 'obstetrician', title: 'অবস্টেট্রিশিয়ান', titleEn: 'Obstetrician', group: 'women', summary: 'গর্ভাবস্থা, প্রসব ও প্রসব-পরবর্তী মা ও শিশুর যত্নে অবস্টেট্রিশিয়ান বিশেষজ্ঞ সেবা দেন।', cares: ['প্রসবপূর্ব চেকআপ', 'গর্ভাবস্থার জটিলতা', 'প্রসব ও পরবর্তী যত্ন'] },
  { slug: 'hematologist', title: 'হেমাটোলজিস্ট', titleEn: 'Hematologist', group: 'diagnostics', summary: 'রক্তস্বল্পতা, থ্যালাসেমিয়া, রক্ত জমাট বাঁধা ও রক্তের ক্যান্সারজনিত রোগে হেমাটোলজিস্ট বিশেষজ্ঞ।', cares: ['অ্যানিমিয়া ও রক্তস্বল্পতা', 'রক্ত জমাট বাঁধার সমস্যা', 'রক্ত সংক্রান্ত জটিল রোগ'] },
  { slug: 'rheumatologist', title: 'রিউমাটোলজিস্ট', titleEn: 'Rheumatologist', group: 'medical', summary: 'বাত, আর্থ্রাইটিস, লুপাস ও অটোইমিউন রোগের চিকিৎসায় রিউমাটোলজিস্ট সাহায্য করেন।', cares: ['জয়েন্ট ব্যথা ও বাত', 'অটোইমিউন রোগ', 'দীর্ঘস্থায়ী প্রদাহ'] },
  { slug: 'toxicologist', title: 'টক্সিকোলজিস্ট', titleEn: 'Toxicologist', group: 'medical', summary: 'বিষক্রিয়া, ওষুধের পার্শ্বপ্রতিক্রিয়া ও ক্ষতিকর রাসায়নিকের প্রভাব নিয়ে টক্সিকোলজিস্ট কাজ করেন।', cares: ['বিষক্রিয়া ও ওষুধের প্রতিক্রিয়া', 'রাসায়নিক এক্সপোজার', 'জরুরি বিষক্রিয়া মূল্যায়ন'] },
  { slug: 'cardiologist', title: 'কার্ডিওলজিস্ট', titleEn: 'Cardiologist', group: 'medical', summary: 'হৃদরোগ, বুকে ব্যথা, হার্ট অ্যাটাকের ঝুঁকি ও রক্তচাপ নিয়ন্ত্রণে কার্ডিওলজিস্ট বিশেষজ্ঞ।', cares: ['বুকে ব্যথা ও ধড়ফড়', 'উচ্চ রক্তচাপ', 'হৃদপিণ্ডের পরীক্ষা ও ফলোআপ'] },
  { slug: 'cardiothoracic_surgeon', title: 'কার্ডিওথোরাসিক সার্জন', titleEn: 'Cardiothoracic Surgeon', group: 'surgery', summary: 'হৃদপিণ্ড, ফুসফুস ও বুকের অস্ত্রোপচারের জন্য কার্ডিওথোরাসিক সার্জন প্রয়োজন।', cares: ['হার্ট সার্জারি পরামর্শ', 'বুক ও ফুসফুসের অস্ত্রোপচার', 'অপারেশন-পরবর্তী ফলোআপ'] },
  { slug: 'orthopedic_surgeon', title: 'অর্থোপেডিক সার্জন', titleEn: 'Orthopedic Surgeon', group: 'surgery', summary: 'হাড়, জয়েন্ট, মেরুদণ্ড ও চোটজনিত সমস্যার চিকিৎসা ও অস্ত্রোপচারে অর্থোপেডিক সার্জন বিশেষজ্ঞ।', cares: ['হাড় ভাঙা ও চোট', 'হাটু, কোমর ও ঘাড় ব্যথা', 'জয়েন্ট ও স্পোর্টস ইনজুরি'] },
  { slug: 'cosmetic_surgeon', title: 'কসমেটিক সার্জন', titleEn: 'Cosmetic Surgeon', group: 'surgery', summary: 'চেহারা ও শরীরের নান্দনিক পরিবর্তন সংক্রান্ত অস্ত্রোপচার ও পরামর্শে কসমেটিক সার্জন সাহায্য করেন।', cares: ['নান্দনিক সার্জারি পরামর্শ', 'শরীর ও মুখমণ্ডলের কনট্যুর', 'নিরাপদ প্রি-সার্জারি মূল্যায়ন'] },
  { slug: 'plastic_surgeon', title: 'প্লাস্টিক সার্জন', titleEn: 'Plastic Surgeon', group: 'surgery', summary: 'পোড়া, চোট, পুনর্গঠন ও প্লাস্টিক সার্জারি সংক্রান্ত সেবায় প্লাস্টিক সার্জন বিশেষজ্ঞ।', cares: ['রিকনস্ট্রাকটিভ সার্জারি', 'পোড়া ও ক্ষত পুনর্গঠন', 'জন্মগত ত্রুটি সংশোধন'] },
  { slug: 'transplant_surgeon', title: 'ট্রান্সপ্লান্ট সার্জন', titleEn: 'Transplant Surgeon', group: 'surgery', summary: 'অঙ্গ প্রতিস্থাপন, মূল্যায়ন ও অস্ত্রোপচার-পরবর্তী যত্নে ট্রান্সপ্লান্ট সার্জন কাজ করেন।', cares: ['অঙ্গ প্রতিস্থাপন পরামর্শ', 'প্রি-ট্রান্সপ্লান্ট মূল্যায়ন', 'পোস্ট-সার্জারি ফলোআপ'] },
  { slug: 'neurosurgeon', title: 'নিউরো সার্জন', titleEn: 'Neurosurgeon', group: 'surgery', summary: 'মস্তিষ্ক, মেরুদণ্ড ও স্নায়ুর অস্ত্রোপচারের জন্য নিউরো সার্জন প্রয়োজন।', cares: ['মেরুদণ্ড ও ডিস্ক সমস্যা', 'মস্তিষ্কের টিউমার পরামর্শ', 'স্নায়ু চাপ ও চোট'] },
  { slug: 'general_surgeon', title: 'জেনারেল সার্জন', titleEn: 'General Surgeon', group: 'surgery', summary: 'অ্যাপেনডিক্স, গলব্লাডার, হার্নিয়াসহ সাধারণ অস্ত্রোপচারে জেনারেল সার্জন বিশেষজ্ঞ।', cares: ['হার্নিয়া ও অ্যাপেনডিক্স', 'গলব্লাডার অপারেশন', 'সাধারণ সার্জিক্যাল পরামর্শ'] },
  { slug: 'aesthetician', title: 'এস্থেটিশিয়ান', titleEn: 'Aesthetician', group: 'skin', summary: 'ত্বকের যত্ন, ফেসিয়াল ও নন-সার্জিক্যাল এস্থেটিক সেবায় এস্থেটিশিয়ান সাহায্য করেন।', cares: ['স্কিন কেয়ার পরামর্শ', 'নন-সার্জিক্যাল এস্থেটিক', 'ত্বকের উজ্জ্বলতা ও যত্ন'] },
  { slug: 'dermatologist', title: 'ডার্মাটোলজিস্ট', titleEn: 'Dermatologist', group: 'skin', summary: 'ব্রণ, একজিমা, চুল পড়া, অ্যালার্জি ও ত্বকের রোগে ডার্মাটোলজিস্ট বিশেষজ্ঞ চিকিৎসা দেন।', cares: ['ব্রণ ও দাগ', 'চুল পড়া ও স্ক্যাল্প সমস্যা', 'ত্বকের অ্যালার্জি ও ইনফেকশন'] },
  { slug: 'allergist', title: 'এলার্জোলজিস্ট', titleEn: 'Allergist', group: 'medical', summary: 'খাবার, ধুলা, পরাগ ও ওষুধজনিত অ্যালার্জি নির্ণয় ও ব্যবস্থাপনায় এলার্জোলজিস্ট সাহায্য করেন।', cares: ['ত্বক ও শ্বাসযন্ত্রের অ্যালার্জি', 'খাবার অ্যালার্জি', 'অ্যালার্জি টেস্ট ও প্রতিরোধ'] },
  { slug: 'psychiatrist', title: 'সাইকিয়াট্রিস্ট', titleEn: 'Psychiatrist', group: 'mind', summary: 'ডিপ্রেশন, উদ্বেগ, ঘুম ও মানসিক রোগের চিকিৎসা ও ওষুধ ব্যবস্থাপনায় সাইকিয়াট্রিস্ট বিশেষজ্ঞ।', cares: ['ডিপ্রেশন ও উদ্বেগ', 'ঘুমের সমস্যা', 'মানসিক রোগের চিকিৎসা'] },
  { slug: 'psychologist', title: 'সাইকোলজিস্ট', titleEn: 'Psychologist', group: 'mind', summary: 'কাউন্সেলিং, আচরণগত থেরাপি ও মানসিক চাপ ব্যবস্থাপনায় সাইকোলজিস্ট সহায়তা করেন।', cares: ['কাউন্সেলিং ও থেরাপি', 'স্ট্রেস ও সম্পর্ক', 'আচরণগত সহায়তা'] },
  { slug: 'oncologist', title: 'অনকোলজিস্ট', titleEn: 'Oncologist', group: 'diagnostics', summary: 'ক্যান্সার নির্ণয়, কেমোথেরাপি ও দীর্ঘমেয়াদি ক্যান্সার ব্যবস্থাপনায় অনকোলজিস্ট বিশেষজ্ঞ।', cares: ['ক্যান্সার স্ক্রিনিং', 'চিকিৎসা পরিকল্পনা', 'ফলোআপ ও সাপোর্টিভ কেয়ার'] },
  { slug: 'urologist', title: 'ইউরোলজিস্ট', titleEn: 'Urologist', group: 'medical', summary: 'মূত্রনালি, কিডনি পাথর, প্রোস্টেট ও পুরুষ প্রজনন স্বাস্থ্যে ইউরোলজিস্ট বিশেষজ্ঞ।', cares: ['কিডনি পাথর', 'প্রস্রাবের সমস্যা', 'প্রোস্টেট ও ইউরোলজি সার্জারি পরামর্শ'] },
  { slug: 'radiologist', title: 'রেডিওলজিস্ট', titleEn: 'Radiologist', group: 'diagnostics', summary: 'এক্স-রে, আল্ট্রাসাউন্ড, সিটি ও এমআরআই রিপোর্ট বিশ্লেষণে রেডিওলজিস্ট বিশেষজ্ঞ।', cares: ['ইমেজিং রিপোর্ট ব্যাখ্যা', 'সিটি, এমআরআই ও আল্ট্রাসাউন্ড', 'নির্ণয় সহায়ক পরীক্ষা'] },
  { slug: 'pathologist', title: 'প্যাথলজিস্ট', titleEn: 'Pathologist', group: 'diagnostics', summary: 'রক্ত, বায়োপসি ও ল্যাব পরীক্ষার ফলাফল বিশ্লেষণ করে রোগ নির্ণয়ে প্যাথলজিস্ট সাহায্য করেন।', cares: ['ল্যাব রিপোর্ট বিশ্লেষণ', 'বায়োপসি ও হিস্টোপ্যাথলজি', 'সঠিক নির্ণয় সহায়তা'] },
  { slug: 'dentist', title: 'ডেন্টিস্ট', titleEn: 'Dentist', group: 'medical', summary: 'দাঁতের ব্যথা, মাড়ির সমস্যা, ব্রেস ও দাঁতের সৌন্দর্য চিকিৎসায় ডেন্টিস্ট সেবা দেন।', cares: ['দাঁতের ব্যথা ও ক্যাভিটি', 'মাড়ি ও রুট ক্যানাল', 'পরিষ্কার ও কসমেটিক ডেন্টিস্ট্রি'] },
  { slug: 'geriatrician', title: 'জেরিয়াট্রিশিয়ান', titleEn: 'Geriatrician', group: 'medical', summary: 'বয়োজ্যেষ্ঠদের একাধিক রোগ, ওষুধ ব্যবস্থাপনা ও দৈনন্দিন যত্নে জেরিয়াট্রিশিয়ান বিশেষজ্ঞ।', cares: ['বয়োজ্যেষ্ঠদের চেকআপ', 'একাধিক রোগ ব্যবস্থাপনা', 'পতন ও স্মৃতি সমস্যা'] },
  { slug: 'physiotherapist', title: 'ফিজিয়োথেরাপিস্ট', titleEn: 'Physiotherapist', group: 'support', summary: 'ব্যথা, স্ট্রোক পরবর্তী পুনর্বাসন ও চলাফেরার ক্ষমতা ফিরিয়ে আনতে ফিজিয়োথেরাপিস্ট সাহায্য করেন।', cares: ['কোমর, হাটু ও ঘাড় ব্যথা', 'ইনজুরি পুনর্বাসন', 'ব্যায়াম ও মোবিলিটি'] },
  { slug: 'ophthalmologist', title: 'অপথালমোলজিস্ট', titleEn: 'Ophthalmologist', group: 'medical', summary: 'চোখের দৃষ্টি সমস্যা, ছানি, গ্লুকোমা ও চোখের অস্ত্রোপচারে অপথালমোলজিস্ট বিশেষজ্ঞ।', cares: ['দৃষ্টি পরীক্ষা', 'ছানি ও চোখ লাল হওয়া', 'চোখের অস্ত্রোপচার পরামর্শ'] },
  { slug: 'clinical_geneticist', title: 'ক্লিনিক্যাল জেনেটিসিস্ট', titleEn: 'Clinical Geneticist', group: 'diagnostics', summary: 'বংশগত রোগ, জেনেটিক পরীক্ষা ও পারিবারিক ঝুঁকি মূল্যায়নে ক্লিনিক্যাল জেনেটিসিস্ট পরামর্শ দেন।', cares: ['বংশগত রোগ মূল্যায়ন', 'জেনেটিক কাউন্সেলিং', 'পারিবারিক ঝুঁকি বিশ্লেষণ'] },
  { slug: 'nutritionist', title: 'ডায়েটেশিয়ান বা নিউট্রিশনিস্ট', titleEn: 'Dietitian / Nutritionist', group: 'support', summary: 'ওজন, ডায়াবেটিস, প্রেগন্যান্সি ও রোগ অনুযায়ী খাদ্য পরিকল্পনায় নিউট্রিশনিস্ট সাহায্য করেন।', cares: ['ওজন নিয়ন্ত্রণ', 'রোগভিত্তিক ডায়েট', 'পুষ্টি পরিকল্পনা'] },
  { slug: 'critical_care', title: 'ক্রিটিকাল কেয়ার স্পেশালিস্ট', titleEn: 'Critical Care Specialist', group: 'public', summary: 'আইসিইউ, ভেন্টিলেটর ও জীবন-ঝুঁকিপূর্ণ রোগীর নিবিড় পরিচর্যায় ক্রিটিকাল কেয়ার বিশেষজ্ঞ দায়িত্ব পালন করেন।', cares: ['আইসিইউ কেয়ার', 'গুরুতর অসুস্থতা', 'নিবিড় পর্যবেক্ষণ'] },
  { slug: 'public_health', title: 'পাবলিক হেলথ স্পেশালিস্ট', titleEn: 'Public Health Specialist', group: 'public', summary: 'রোগ প্রতিরোধ, টিকা, স্বাস্থ্য সচেতনতা ও কমিউনিটি স্বাস্থ্য পরিকল্পনায় পাবলিক হেলথ বিশেষজ্ঞ কাজ করেন।', cares: ['রোগ প্রতিরোধ', 'কমিউনিটি স্বাস্থ্য', 'স্বাস্থ্য সচেতনতা'] },
  { slug: 'emergency_medicine', title: 'ইমার্জেন্সি মেডিসিন স্পেশালিস্ট', titleEn: 'Emergency Medicine Specialist', group: 'public', summary: 'দুর্ঘটনা, তীব্র ব্যথা, স্ট্রোক ও হঠাৎ অসুস্থতার জরুরি চিকিৎসায় ইমার্জেন্সি মেডিসিন বিশেষজ্ঞ প্রয়োজন।', cares: ['জরুরি চিকিৎসা', 'দুর্ঘটনা ও আঘাত', 'তীব্র অসুস্থতা স্থিতিশীলকরণ'] },
  { slug: 'preventive_medicine', title: 'প্রিভেন্টিভ মেডিসিন স্পেশালিস্ট', titleEn: 'Preventive Medicine Specialist', group: 'public', summary: 'রোগ হওয়ার আগেই স্ক্রিনিং, লাইফস্টাইল ও প্রতিরোধমূলক যত্নে প্রিভেন্টিভ মেডিসিন বিশেষজ্ঞ সাহায্য করেন।', cares: ['হেলথ চেকআপ', 'ঝুঁকি মূল্যায়ন', 'লাইফস্টাইল পরামর্শ'] },
  { slug: 'infectious_disease', title: 'ইনফেকশিয়াস ডিজিজ স্পেশালিস্ট', titleEn: 'Infectious Disease Specialist', group: 'medical', summary: 'জ্বর, ভাইরাস, ব্যাকটেরিয়া ও জটিল সংক্রমণের চিকিৎসায় ইনফেকশিয়াস ডিজিজ বিশেষজ্ঞ কাজ করেন।', cares: ['জটিল ইনফেকশন', 'অ্যান্টিবায়োটিক পরামর্শ', 'সংক্রামক রোগ ব্যবস্থাপনা'] },
  { slug: 'sports_medicine', title: 'স্পোর্টস মেডিসিন স্পেশালিস্ট', titleEn: 'Sports Medicine Specialist', group: 'support', summary: 'খেলোয়াড় ও সক্রিয় মানুষের ইনজুরি, পুনর্বাসন ও পারফরম্যান্স যত্নে স্পোর্টস মেডিসিন বিশেষজ্ঞ সাহায্য করেন।', cares: ['স্পোর্টস ইনজুরি', 'পুনর্বাসন পরিকল্পনা', 'ফিরে খেলার উপযোগিতা'] },
  { slug: 'pain_management', title: 'পেইন ম্যানেজমেন্ট স্পেশালিস্ট', titleEn: 'Pain Management Specialist', group: 'support', summary: 'দীর্ঘস্থায়ী ব্যথা, কোমর ব্যথা ও স্নায়ু ব্যথার আধুনিক ব্যবস্থাপনায় পেইন স্পেশালিস্ট সেবা দেন।', cares: ['দীর্ঘস্থায়ী ব্যথা', 'স্নায়ু ও জয়েন্ট ব্যথা', 'নন-সার্জিক্যাল ব্যথা নিয়ন্ত্রণ'] },
  { slug: 'palliative_care', title: 'প্যালিয়েটিভ কেয়ার স্পেশালিস্ট', titleEn: 'Palliative Care Specialist', group: 'support', summary: 'গুরুতর অসুস্থ রোগীর আরাম, ব্যথা নিয়ন্ত্রণ ও পরিবারকে সহায়তায় প্যালিয়েটিভ কেয়ার বিশেষজ্ঞ কাজ করেন।', cares: ['আরামদায়ক যত্ন', 'ব্যথা ও উপসর্গ নিয়ন্ত্রণ', 'পরিবারকে সহায়তা'] },
  { slug: 'occupational_medicine', title: 'অকুপেশনাল মেডিসিন স্পেশালিস্ট', titleEn: 'Occupational Medicine Specialist', group: 'public', summary: 'কর্মক্ষেত্রের স্বাস্থ্যঝুঁকি, চোট ও পেশাগত রোগ প্রতিরোধে অকুপেশনাল মেডিসিন বিশেষজ্ঞ পরামর্শ দেন।', cares: ['কর্মক্ষেত্রের চোট', 'পেশাগত স্বাস্থ্য পরীক্ষা', 'ঝুঁকি প্রতিরোধ'] },
  { slug: 'child_development', title: 'চাইল্ড ডেভেলপমেন্ট স্পেশালিস্ট', titleEn: 'Child Development Specialist', group: 'support', summary: 'কথা বলা, চলা, শেখা ও আচরণগত বিকাশে দেরি হলে চাইল্ড ডেভেলপমেন্ট স্পেশালিস্ট মূল্যায়ন করেন।', cares: ['বিকাশ মূল্যায়ন', 'স্পিচ ও লার্নিং সাপোর্ট', 'আচরণগত পরামর্শ'] },
  { slug: 'homeopathy', title: 'হোমিওপ্যাথি', titleEn: 'Homeopathy', group: 'support', summary: 'হোমিওপ্যাথিক পদ্ধতিতে দীর্ঘমেয়াদি ও সাধারণ অসুস্থতার বিকল্প চিকিৎসা সেবা পাওয়া যায়।', cares: ['হোমিও পরামর্শ', 'দীর্ঘমেয়াদি উপসর্গ', 'বিকল্প চিকিৎসা পথ'] },
];

export function getSpecialty(slug: string) {
  return doctorSpecialties.find((item) => item.slug === slug);
}

export function relatedSpecialties(slug: string, limit = 6) {
  const current = getSpecialty(slug);
  if (!current) return doctorSpecialties.slice(0, limit);
  const sameGroup = doctorSpecialties.filter((item) => item.group === current.group && item.slug !== slug);
  const rest = doctorSpecialties.filter((item) => item.group !== current.group && item.slug !== slug);
  return [...sameGroup, ...rest].slice(0, limit);
}

export function doctorMatchesSpecialty(doctor: Record<string, unknown>, specialty: DoctorSpecialty) {
  const slugVariants = [specialty.slug, specialty.slug.replace(/_/g, '-'), specialty.slug.replace(/_/g, ' ')];
  const values = [
    doctor.specialty,
    doctor.speciality,
    doctor.specialty_slug,
    doctor.category,
    doctor.department,
    doctor.type,
    doctor.slug,
    Array.isArray(doctor.tags) ? doctor.tags.join(' ') : '',
    doctor.title,
    doctor.excerpt,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return slugVariants.some((variant) => values.includes(variant.toLowerCase()))
    || values.includes(specialty.title.toLowerCase())
    || values.includes(specialty.titleEn.toLowerCase());
}
