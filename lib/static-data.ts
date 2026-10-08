export type StaticItem = {
  id: number; slug: string; title: string; excerpt?: string; body?: string; type?: string;
  category?: string; location?: { address: string; thana?: string; city?: string };
  contacts?: { id: number; label: string; value: string }[];
  media?: { path?: string; alt_text?: string }[];
  meta?: Record<string, any>; seo?: Record<string, string>;
};

const img = (alt: string) => [{ alt_text: alt }];
const contact = (phone: string, extra?: string) => [{ id: 1, label: 'ফোন', value: phone }, ...(extra ? [{ id: 2, label: 'যোগাযোগ', value: extra }] : [])];
const base = (id:number, slug:string, title:string, address:string, excerpt:string, phone='+880 1700-000000', meta:Record<string,any>={}) : StaticItem => ({
  id, slug, title, excerpt, body: `${title} সম্পর্কে সংক্ষিপ্ত তথ্য। ফেনী জেলার স্থানীয় বাসিন্দা ও দর্শনার্থীদের জন্য প্রয়োজনীয় তথ্য এখানে একসাথে দেওয়া হয়েছে।\n\nসেবা, যোগাযোগ, অবস্থান এবং প্রয়োজনীয় নির্দেশনা যাচাই করে সরাসরি প্রতিষ্ঠানের সঙ্গে যোগাযোগ করুন।`,
  location:{address, thana:'সদর', city:'ফেনী'}, contacts:contact(phone), media:img(title), meta
});

export const staticData: Record<string, StaticItem[]> = {
  hospitals: [
    base(1,'feni-250-bed-district-hospital','ফেনী ২৫০ শয্যা জেলা সদর হাসপাতাল','ফেনী সদর, ফেনী','সরকারি ২৫০ শয্যার জেলা পর্যায়ের হাসপাতাল ও জরুরি চিকিৎসা সেবা।','+880 1730-324771',{kind:'সরকারি হাসপাতাল',departments:['মেডিসিন','সার্জারি','গাইনি ও প্রসূতি','শিশু','অর্থোপেডিক','ইমার্জেন্সি','কার্ডিওলজি'],doctors:['ডা. মো. রফিকুল ইসলাম','ডা. নাসরিন আক্তার','ডা. মাহমুদ হাসান'],staff:['নার্সিং টিম','ল্যাব টেকনোলজিস্ট','ফার্মেসি টিম'],management:['তত্ত্বাবধায়ক','আবাসিক মেডিকেল অফিসার'],facilities:['২৪/৭ জরুরি বিভাগ','অ্যাম্বুলেন্স','প্যাথলজি','ফার্মেসি','রক্ত সেবা']}),
    base(2,'feni-diabetic-hospital','ফেনী ডায়াবেটিক হাসপাতাল','সদর, ফেনী','ডায়াবেটিস, মেডিসিন ও দীর্ঘমেয়াদি রোগ ব্যবস্থাপনা কেন্দ্র।','+880 1812-345678',{kind:'বেসরকারি ক্লিনিক',departments:['ডায়াবেটিস','মেডিসিন','নেফ্রোলজি','কার্ডিওলজি'],doctors:['ডা. তাসনিম জারা','ডা. সামিয়া রহমান'],staff:['নার্সিং টিম','ডায়েট কাউন্সেলর'],management:['হাসপাতাল প্রশাসন'],facilities:['ডায়াবেটিস ক্লিনিক','ল্যাব','ইসিজি','ফার্মেসি']}),
    base(3,'feni-modern-clinic','ফেনী মডার্ন ক্লিনিক','এসএসকে রোড, ফেনী','বেসরকারি চিকিৎসা, ডায়াগনস্টিক ও কনসালটেশন সেবা।','+880 1888-112233',{kind:'বেসরকারি ক্লিনিক',departments:['মেডিসিন','সার্জারি','গাইনি','শিশু','ডায়াগনস্টিক'],doctors:['ডা. আবদুল্লাহ আল মামুন','ডা. ফারজানা ইয়াসমিন'],staff:['নার্সিং টিম','রিসেপশন','ল্যাব টিম'],management:['ম্যানেজার','মেডিকেল অ্যাডমিন'],facilities:['কেবিন','অপারেশন থিয়েটার','ল্যাব','আল্ট্রাসনোগ্রাম']})
  ],
  hotels: [
    base(11,'hotel-night-hold','হোটেল নাইট হোল্ড (আবাসিক)','মহিপাল, ফেনী','মহিপাল এলাকায় আবাসিক হোটেল; স্বল্প ও দীর্ঘমেয়াদি থাকার সুবিধা।','+880 1715-448838',{rooms:['Single Room','Double Room','Family Room'],facilities:['Wi-Fi','২৪ ঘণ্টা রিসেপশন','পার্কিং','রুম সার্ভিস'],checkIn:'দুপুর ১২টা',checkOut:'সকাল ১১টা'}),
    base(12,'hotel-feni-park','হোটেল ফেনী পার্ক','শহর, ফেনী','শহরের কেন্দ্রস্থলে পরিবার ও ব্যবসায়িক ভ্রমণের জন্য আবাসন।','+880 1811-223344',{rooms:['Deluxe','Twin','Family'],facilities:['Wi-Fi','রেস্টুরেন্ট','পার্কিং','লিফট'],checkIn:'দুপুর ১২টা',checkOut:'সকাল ১১টা'}),
    base(13,'grand-feni-residence','গ্র্যান্ড ফেনী রেসিডেন্স','ট্রাংক রোড, ফেনী','পরিষ্কার ও আরামদায়ক শহুরে আবাসন।','+880 1912-334455',{rooms:['Standard','Deluxe','Suite'],facilities:['Breakfast','Wi-Fi','Security','Parking'],checkIn:'দুপুর ১২টা',checkOut:'সকাল ১১টা'})
  ],
  'diagnostic-centers': [
    base(21,'modern-diagnostic-center','মডার্ন ডায়াগনস্টিক সেন্টার','বড় মসজিদ রোড, গ্র্যান্ড ট্রাঙ্ক রোড, ফেনী','প্যাথলজি, ইমেজিং ও স্বাস্থ্য পরীক্ষার ডায়াগনস্টিক সেন্টার।','+880 1700-000001',{services:['CBC','Blood Sugar','X-Ray','Ultrasonography','ECG'],hours:'সকাল ৭টা–রাত ১০টা'}),
    base(22,'feni-diagnostic-complex','ফেনী ডায়াগনস্টিক কমপ্লেক্স','সদর, ফেনী','নিয়মিত ও বিশেষায়িত ল্যাব টেস্টের সুবিধা।','+880 1700-000002',{services:['Pathology','Hormone Test','X-Ray','USG'],hours:'সকাল ৮টা–রাত ৯টা'}),
    base(23,'city-health-diagnostic','সিটি হেলথ ডায়াগনস্টিক','এসএসকে রোড, ফেনী','দ্রুত রিপোর্ট ও চিকিৎসক কনসালটেশন সহ ডায়াগনস্টিক সেবা।','+880 1700-000003',{services:['Pathology','ECG','Echo','Ultrasonography'],hours:'সকাল ৮টা–রাত ১০টা'})
  ],
  doctors: [
    base(31,'dr-tasnim-jara','ডা. তাসনিম জারা','ফেনী সদর, ফেনী','সিনিয়র ক্লিনিক্যাল সুপারভাইজার; মেডিসিন ও প্রাইমারি কেয়ার।','+880 1700-000010',{degree:'MBBS (DMC), MSc (Oxford), MRCP (UK)',designation:'সিনিয়র ক্লিনিক্যাল সুপারভাইজার',chamber:'Lab Aid',specialty_slug:'medicine'}),
    base(32,'dr-nasrin-akter','ডা. নাসরিন আক্তার','সদর, ফেনী','গাইনি ও প্রসূতি রোগ বিশেষজ্ঞ।','+880 1700-000011',{degree:'MBBS, FCPS',designation:'কনসালট্যান্ট',chamber:'Feni Medical Centre',specialty_slug:'gynecologist'}),
    base(33,'dr-mahmud-hasan','ডা. মাহমুদ হাসান','সদর, ফেনী','কার্ডিওলজি ও মেডিসিন বিশেষজ্ঞ।','+880 1700-000012',{degree:'MBBS, MD',designation:'কনসালট্যান্ট',chamber:'City Hospital',specialty_slug:'cardiologist'})
  ],
  'educational-institutes': [
    base(41,'feni-government-college','ফেনী সরকারি কলেজ','কলেজ রোড, ফেনী','ফেনীর ঐতিহ্যবাহী উচ্চশিক্ষা প্রতিষ্ঠান।','+880 1700-000020',{level:'কলেজ',established:'১৯২২',departments:['বাংলা','ইংরেজি','হিসাববিজ্ঞান','অর্থনীতি','বিজ্ঞান'] }),
    base(42,'feni-government-pilot-high-school','ফেনী সরকারি পাইলট উচ্চ বিদ্যালয়','সদর, ফেনী','মাধ্যমিক পর্যায়ের ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান।','+880 1700-000021',{level:'হাইস্কুল',established:'১৯১৯',facilities:['লাইব্রেরি','ল্যাব','খেলার মাঠ']}),
    base(43,'azmiri-begum-primary-school','আজমিরী বেগম রেজিঃ বেঃ প্রাঃ বিদ্যালয়','ছাগলনাইয়া, ফেনী','প্রাথমিক শিক্ষার স্থানীয় প্রতিষ্ঠান।','+880 1700-000022',{level:'প্রাইমারী',facilities:['শ্রেণিকক্ষ','খেলার মাঠ','ডিজিটাল কনটেন্ট']})
  ],
  restaurants: [
    base(51,'station-restaurant','ইস্টিশন রেস্টুরেন্ট এন্ড কনভেনশন','১৭৮ হাজী জয়নাল হক লেন, এসএসকে রোড, ফেনী','দেশীয় খাবার, পারিবারিক ডাইনিং ও ইভেন্ট স্পেস।','+880 1884-466633',{cuisine:['বাংলাদেশি','চাইনিজ','ফাস্ট ফুড'],features:['Family Dining','Convention Hall','Takeaway']}),
    base(52,'feni-food-court','ফেনী ফুড কোর্ট','শহর, ফেনী','দ্রুত খাবার ও পরিবারসহ খাওয়ার জন্য জনপ্রিয় স্পট।','+880 1700-000031',{cuisine:['Fast Food','Bangla','Chinese'],features:['Wi-Fi','Takeaway','Delivery']}),
    base(53,'meghna-biryani-house','মেঘনা বিরিয়ানি হাউস','মহিপাল, ফেনী','বিরিয়ানি ও স্থানীয় খাবারের রেস্টুরেন্ট।','+880 1700-000032',{cuisine:['Biryani','Bangla'],features:['Dine-in','Takeaway']})
  ],
  'shopping-centers': [
    base(61,'f-rahman-ac-market','এফ রাহমান এসি মার্কেট','সদর, ফেনী','শহরের পরিচিত শপিং ও ব্যবসায়িক মার্কেট।','+880 1700-000040',{categories:['ফ্যাশন','ইলেকট্রনিক্স','জুয়েলারি','কসমেটিকস']}),
    base(62,'feni-grand-market','ফেনী গ্র্যান্ড মার্কেট','ট্রাংক রোড, ফেনী','বিভিন্ন পণ্যের স্থানীয় মার্কেট।','+880 1700-000041',{categories:['পোশাক','জুতা','হোম অ্যাপ্লায়েন্স']}),
    base(63,'city-plaza-feni','সিটি প্লাজা ফেনী','সদর, ফেনী','শপিং ও দৈনন্দিন প্রয়োজনের পণ্যের কেন্দ্র।','+880 1700-000042',{categories:['ফ্যাশন','মোবাইল','কসমেটিকস']})
  ],
  teachers: [
    base(71,'rakibul-islam-teacher','রাকিবুল ইসলাম','ছাগলনাইয়া, ফেনী','অংক, ইংলিশ, রসায়ন ও পদার্থ বিজ্ঞানের শিক্ষক।','+880 1700-000050',{instituteName:'আজমিরী বেগম রেজিঃ বেঃ প্রাঃ বিদ্যালয়',subject:'অংক, ইংলিশ, রসায়ন, পদার্থ বিজ্ঞান',level:'হাইস্কুল'}),
    base(72,'farhana-akter-teacher','ফারহানা আক্তার','সদর, ফেনী','বাংলা ও ইংরেজি বিষয়ের শিক্ষক।','+880 1700-000051',{instituteName:'ফেনী সরকারি বালিকা উচ্চ বিদ্যালয়',subject:'বাংলা, ইংরেজি',level:'হাইস্কুল'}),
    base(73,'sabbir-hossain-teacher','সাব্বির হোসেন','দাগনভূঞা, ফেনী','গণিত ও বিজ্ঞান বিষয়ের শিক্ষক।','+880 1700-000052',{instituteName:'স্থানীয় শিক্ষা প্রতিষ্ঠান',subject:'গণিত, বিজ্ঞান',level:'কোচিং'})
  ],
  jobs: [
    base(81,'salesman-super-shop','সেলসম্যান','সদর, ফেনী','সুনামধন্য সুপার শপে ফুল-টাইম নিয়োগ।','+880 1700-000060',{companyName:'একটি স্বনামধন্য সুপার শপ',jobType:'ফুল টাইম',salary:'১০,০০০ - ১৫,০০০ টাকা',applicationDeadline:'১০ জানুয়ারি ২০২৭'}),
    base(82,'customer-care-executive','কাস্টমার কেয়ার এক্সিকিউটিভ','মহিপাল, ফেনী','সেবা প্রতিষ্ঠানে কাস্টমার কেয়ার পদে নিয়োগ।','+880 1700-000061',{companyName:'Feni Service Hub',jobType:'ফুল টাইম',salary:'১২,০০০ - ১৮,০০০ টাকা',applicationDeadline:'২০ জানুয়ারি ২০২৭'}),
    base(83,'accounts-assistant','অ্যাকাউন্টস অ্যাসিস্ট্যান্ট','সদর, ফেনী','ছোট ও মাঝারি প্রতিষ্ঠানে হিসাবরক্ষণ সহকারী।','+880 1700-000062',{companyName:'Feni Business House',jobType:'ফুল টাইম',salary:'১৫,০০০ - ২২,০০০ টাকা',applicationDeadline:'২৫ জানুয়ারি ২০২৭'})
  ],
  'tourist-places': [
    base(91,'pratappur-zamindar-house','প্রতাপপুর জমিদার বাড়ি','প্রতাপপুর, দাগনভূঞা, ফেনী','ঐতিহাসিক স্থাপনা ও স্থানীয় দর্শনীয় স্থান।','+880 1700-000070',{bestTime:'শীতকাল ও বিকেল',highlights:['ঐতিহাসিক স্থাপত্য','ছবি তোলার স্থান','গ্রামীণ পরিবেশ']}),
    base(92,'rajapur-lake','রাজাপুর লেক এলাকা','ফেনী সদর, ফেনী','প্রকৃতি ও খোলা পরিবেশ উপভোগের স্থানীয় স্থান।','+880 1700-000071',{bestTime:'বিকেল',highlights:['প্রকৃতি','সূর্যাস্ত','ফটোগ্রাফি']}),
    base(93,'muhuri-project','মুহুরী প্রকল্প','ফেনী অঞ্চলের নদী তীরবর্তী এলাকা','নদী ও প্রকৃতির সৌন্দর্য উপভোগের আকর্ষণ।','+880 1700-000072',{bestTime:'শীতকাল',highlights:['নদী','প্রকৃতি','ভ্রমণ']})
  ],
  gardens: [
    base(101,'arzu-nursery','আরজু নার্সারী বৃক্ষ বাজার','সদর, ফেনী','গাছপালা, ফুল ও বাগান সামগ্রীর স্থানীয় নার্সারি।','+880 1834-317277',{products:['ফলজ গাছ','ফুলের গাছ','ঔষধি গাছ','টব','সার']}),
    base(102,'green-feni-nursery','গ্রিন ফেনী নার্সারি','মহিপাল, ফেনী','বাড়ি ও অফিসের জন্য গাছপালা ও বাগান সামগ্রী।','+880 1700-000081',{products:['Indoor Plants','ফুল','ফলজ গাছ']}),
    base(103,'city-garden-center','সিটি গার্ডেন সেন্টার','সদর, ফেনী','বাগান পরিচর্যা ও গাছের চারা।','+880 1700-000082',{products:['চারা','টব','বাগান টুলস']})
  ],
  parlours: [
    base(111,'hur-beauty-parlour','হুর বিউটি পার্লার ফেনী','সদর, ফেনী','নারী ও পুরুষের গ্রুমিং ও বিউটি কেয়ার সেবা।','+880 1888-278666',{services:['Hair Care','Facial','Bridal Makeup','Skin Care']}),
    base(112,'glamour-beauty','গ্ল্যামার বিউটি লাউঞ্জ','মহিপাল, ফেনী','বিউটি ও পার্সোনাল কেয়ার সেবা।','+880 1700-000091',{services:['Hair','Makeup','Facial']}),
    base(113,'elegance-parlour','এলিগ্যান্স পার্লার','সদর, ফেনী','দৈনন্দিন ও ইভেন্ট গ্রুমিং সেবা।','+880 1700-000092',{services:['Hair','Skin','Bridal']})
  ],
  'service-providers': [
    base(121,'rayhan-islam-mistri','রায়হান ইসলাম','সদর, ফেনী','বাসায় রং করা ও পেইন্টিং সেবা।','+880 1700-000100',{designation:'রং মিস্ত্রি',services:'বাসায় রং করা হয়'}),
    base(122,'plumber-feni','শহীদুল ইসলাম','মহিপাল, ফেনী','বাড়ির পানির লাইন ও স্যানিটারি মেরামত।','+880 1700-000101',{designation:'প্লাম্বার',services:'পাইপ, বাথরুম ও স্যানিটারি কাজ'}),
    base(123,'electrician-feni','মো. সোহেল','সদর, ফেনী','বাড়ি ও অফিসের বৈদ্যুতিক কাজ।','+880 1700-000102',{designation:'ইলেকট্রিশিয়ান',services:'ওয়্যারিং, লাইট, সুইচ ও ছোটখাটো মেরামত'})
  ],
  entrepreneurs: [
    base(131,'rakibul-islam-enterprise','রাকিবুল ইসলাম','সদর, ফেনী','ভিসা প্রসেসিং ও বিদেশে জনবল প্রেরণ সেবা।','+880 1700-000110',{instituteName:'মা-মনি এন্টারপ্রাইজ',subject:'ভিসা প্রসেসিং ও বিদেশে জনবল প্রেরণ করা হয়'}),
    base(132,'feni-digital-enterprise','ফেনী ডিজিটাল এন্টারপ্রাইজ','মহিপাল, ফেনী','ডিজিটাল মার্কেটিং ও অনলাইন ব্যবসা সেবা।','+880 1700-000111',{instituteName:'Feni Digital Hub',subject:'ডিজিটাল মার্কেটিং, ওয়েব ও অনলাইন ব্যবসা'}),
    base(133,'local-food-entrepreneur','স্থানীয় ফুড উদ্যোক্তা','সদর, ফেনী','ঘরোয়া খাবার ও অনলাইন ফুড ডেলিভারি।','+880 1700-000112',{instituteName:'Feni Home Kitchen',subject:'ঘরোয়া খাবার ও অর্ডার সেবা'})
  ],
  'courier-services': [
    base(141,'sundarban-courier-feni','সুন্দরবন কুরিয়ার সার্ভিস','সদর, ফেনী','ডকুমেন্ট ও পার্সেল ডেলিভারি সেবা।','+880 1700-000120',{services:['Parcel Delivery','Document Delivery','COD']}),
    base(142,'sa-paribahan-courier','এস এ পরিবহন পার্সেল','মহিপাল, ফেনী','দেশব্যাপী পার্সেল ও পরিবহন সেবা।','+880 1700-000121',{services:['Parcel','Transport']}),
    base(143,'steadfast-courier-feni','স্টেডফাস্ট কুরিয়ার ফেনী','সদর, ফেনী','ই-কমার্স ডেলিভারি ও পার্সেল সেবা।','+880 1700-000122',{services:['E-commerce','Home Delivery','COD']})
  ],
  'electricity-offices': [
    base(151,'feni-palli-bidyut','ফেনী পল্লী বিদ্যুৎ সমিতি','ফেনী সদর, ফেনী','বিদ্যুৎ সংযোগ, বিল ও গ্রাহকসেবা।','+880 1700-000130',{services:['New Connection','Bill Support','Complaint']}),
    base(152,'dpdc-local-office','স্থানীয় বিদ্যুৎ অভিযোগ কেন্দ্র','সদর, ফেনী','বিদ্যুৎ সংক্রান্ত জরুরি অভিযোগ ও সহায়তা।','+880 1700-000131',{services:['Outage','Complaint','Information']}),
    base(153,'mohipal-electric-office','মহিপাল বিদ্যুৎ অফিস','মহিপাল, ফেনী','স্থানীয় গ্রাহকসেবা ও বিদ্যুৎ সংক্রান্ত তথ্য।','+880 1700-000132',{services:['Customer Care','Complaint']})
  ],
  'police-stations': [
    base(161,'feni-model-police-station','ফেনী মডেল পুলিশ স্টেশন','সদর, ফেনী','আইনশৃঙ্খলা ও নাগরিক সেবা।','+880 1700-000140',{services:['GD','Police Assistance','Emergency Support']}),
    base(162,'mahipal-police-outpost','মহিপাল পুলিশ ফাঁড়ি','মহিপাল, ফেনী','স্থানীয় নিরাপত্তা ও পুলিশ সহায়তা।','+880 1700-000141',{services:['Police Assistance','Patrol']}),
    base(163,'dagonbhuiyan-police','দাগনভূঞা থানা','দাগনভূঞা, ফেনী','থানা ও নাগরিক পুলিশ সেবা।','+880 1700-000142',{services:['GD','Complaint','Investigation']})
  ],
  'fire-services': [
    base(171,'feni-fire-service','ফায়ার সার্ভিস ও সিভিল ডিফেন্স','সদর, ফেনী','অগ্নিনির্বাপণ ও জরুরি উদ্ধার সেবা।','+880 1700-000150',{services:['Fire Response','Rescue','Emergency Advice']}),
    base(172,'mahipal-fire-support','মহিপাল ফায়ার সহায়তা ইউনিট','মহিপাল, ফেনী','স্থানীয় অগ্নিনিরাপত্তা ও জরুরি সহায়তা।','+880 1700-000151',{services:['Emergency Response','Rescue']})
  ],
  'emergency-services': [
    base(181,'national-emergency-999','জাতীয় জরুরী সেবা','বাংলাদেশ','পুলিশ, ফায়ার ও অ্যাম্বুলেন্সসহ জরুরি সহায়তার জাতীয় নম্বর।','999',{services:['Police','Fire','Ambulance'],hotline:'999'}),
    base(182,'feni-ambulance-service','ফেনী অ্যাম্বুলেন্স সার্ভিস','সদর, ফেনী','জরুরি রোগী পরিবহন ও অ্যাম্বুলেন্স সেবা।','+880 1820-141797',{services:['Ambulance','Patient Transport','Emergency Support']}),
    base(183,'feni-blood-emergency','ফেনী জরুরি রক্ত সহায়তা','সদর, ফেনী','জরুরি সময়ে রক্তদাতা খুঁজে পেতে স্থানীয় সহায়তা।','+880 1700-000160',{services:['Blood Donor Matching','Emergency Contact']})
  ],
  blood: [
    base(191,'abdul-karim-o-positive','আব্দুল করিম','সদর, ফেনী','O+ রক্তদাতা; প্রয়োজন হলে যাচাই করে যোগাযোগ করুন।','+880 1700-000170',{bloodGroup:'O+',availability:'প্রয়োজনে',lastDonation:'২০২৬-০৭'}),
    base(192,'sumaiya-akter-a-positive','সুমাইয়া আক্তার','মহিপাল, ফেনী','A+ রক্তদাতা।','+880 1700-000171',{bloodGroup:'A+',availability:'সীমিত',lastDonation:'২০২৬-০৬'}),
    base(193,'rakib-hossain-b-positive','রাকিব হোসেন','সদর, ফেনী','B+ রক্তদাতা।','+880 1700-000172',{bloodGroup:'B+',availability:'প্রয়োজনে',lastDonation:'২০২৬-০৮'})
  ],
  'rental-properties': [
    base(201,'miaji-bari-flat-rent','মিয়াজি বাড়ি','রামপুর গার্লস হাই স্কুলের পাশে, ফেনী','৮০০ বর্গফুটের ৩ বেডরুমের ফ্ল্যাট ভাড়া।','+880 1820-141797',{size:'800 sft',bedroom:'3',date:'০১/০২/২০২৭',amount:'১০,০০০ টাকা'}),
    base(202,'mahipal-family-flat','মহিপাল ফ্যামিলি ফ্ল্যাট','মহিপাল, ফেনী','পরিবারের জন্য ২ বেডরুমের ফ্ল্যাট।','+880 1700-000181',{size:'900 sft',bedroom:'2',amount:'১৪,০০০ টাকা'}),
    base(203,'sadar-bachelor-flat','সদর ব্যাচেলর ফ্ল্যাট','সদর, ফেনী','ছোট পরিবার বা ব্যাচেলরের জন্য ফ্ল্যাট।','+880 1700-000182',{size:'650 sft',bedroom:'2',amount:'৯,০০০ টাকা'})
  ],
  land: [
    base(211,'feni-sadar-land','সদর আবাসিক জমি','সদর, ফেনী','আবাসিক নির্মাণের জন্য জমি বিক্রয়ের তালিকা।','+880 1700-000190',{size:'৫ শতক',amount:'আলোচনা সাপেক্ষে'}),
    base(212,'mahipal-land','মহিপাল জমি','মহিপাল, ফেনী','শহরের কাছে জমি বিক্রয়।','+880 1700-000191',{size:'৩.৫ শতক',amount:'আলোচনা সাপেক্ষে'})
  ],
  vehicles: [
    base(221,'feni-rent-car','ফেনী রেন্ট-এ-কার','সদর, ফেনী','ব্যক্তিগত ও অফিস ভ্রমণের জন্য গাড়ি ভাড়া।','+880 1700-000200',{vehicles:['Toyota Axio','Noah','Hiace'],serviceArea:'ফেনী ও আন্তঃজেলা'}),
    base(222,'mahipal-car-rental','মহিপাল কার রেন্টাল','মহিপাল, ফেনী','দৈনিক ও ট্রিপ ভিত্তিক গাড়ি ভাড়া।','+880 1700-000201',{vehicles:['Sedan','Microbus'],serviceArea:'ফেনী, ঢাকা, চট্টগ্রাম'})
  ],
  news: [
    base(231,'fenir-shomoy','ফেনীর সময়','ফেনী','ফেনী জেলার স্থানীয় সংবাদ ও আপডেট।','+880 1700-000210',{source:'Fenir Shomoy',url:'https://example.com'}),
    base(232,'doinik-feni','দৈনিক ফেনী','ফেনী','স্থানীয় খবর, শিক্ষা, ব্যবসা ও জনজীবনের সংবাদ।','+880 1700-000211',{source:'Doinik Feni'}),
    base(233,'doinik-amar-feni','দৈনিক আমার ফেনী','ফেনী','ফেনী-কেন্দ্রিক সংবাদ ও স্থানীয় প্রতিবেদন।','+880 1700-000212',{source:'Doinik Amar Feni'})
  ],
  videos: [
    base(241,'feni-district-video','ফেনী জেলার ভিডিও','ফেনী','ফেনী জেলার দর্শনীয় স্থান, জীবনযাপন ও স্থানীয় গল্পের ভিডিও।','+880 1700-000220',{videoUrl:'https://www.youtube.com/watch?v=tNgXGowqSHc'}),
    base(242,'feni-city-life','ফেনী সিটি লাইফ','ফেনী','শহরের জীবন ও স্থানীয় আয়োজনের ভিডিও।','+880 1700-000221',{videoUrl:'https://www.youtube.com/watch?v=tNgXGowqSHc'})
  ],
  nursery: [
    base(251,'arzu-tree-market','আরজু নার্সারী বৃক্ষ বাজার','সদর, ফেনী','ফলজ, ফুল ও ঔষধি গাছের চারা।','+880 1834-317277',{products:['ফলজ','ফুল','ঔষধি','টব']}),
    base(252,'green-feni-nursery','গ্রিন ফেনী নার্সারি','মহিপাল, ফেনী','বাড়ির বাগানের জন্য চারা ও পরিচর্যা সামগ্রী।','+880 1700-000231',{products:['Indoor','Outdoor','Flower']})
  ],
  events: [base(261,'feni-city-cultural-fest','ফেনী সিটি সাংস্কৃতিক উৎসব','ফেনী শহর','স্থানীয় সাংস্কৃতিক অনুষ্ঠান ও পরিবারবান্ধব আয়োজন।','+880 1700-000240',{date:'২০২৭-০১-১৫',venue:'ফেনী শহর'})],
  notifications: [base(271,'service-update','সেবা তথ্য আপডেট','ফেনী','নতুন ও সংশোধিত স্থানীয় তথ্য নিয়মিত যোগ করা হচ্ছে।','+880 1700-000250',{priority:'সাধারণ'})]
};

export const staticExternalLinks = {
  bus: [
    {id:1,title:'ফেনী → ঢাকা বাস',description:'ঢাকা রুটের বাস কাউন্টার ও সময়সূচী যাচাই করুন।',url:'#'},
    {id:2,title:'ফেনী → চট্টগ্রাম বাস',description:'চট্টগ্রাম রুটের পরিবহন তথ্য।',url:'#'},
    {id:3,title:'ফেনী স্থানীয় বাস',description:'ফেনী জেলার স্থানীয় রুটের তথ্য।',url:'#'}
  ],
  train: [
    {id:1,title:'ফেনী রেলওয়ে স্টেশন',description:'ট্রেনের সময়সূচী ও স্টেশন তথ্য।',url:'#'},
    {id:2,title:'ঢাকা–চট্টগ্রাম রুট',description:'আন্তঃনগর ট্রেনের রুট তথ্য।',url:'#'},
    {id:3,title:'ফেনী–চট্টগ্রাম রুট',description:'স্থানীয় যাত্রীদের জন্য রুট তথ্য।',url:'#'}
  ],
  blood: []
};

export function allStaticItems() { return Object.entries(staticData).flatMap(([resource,items]) => items.map(item => ({...item, resource}))); }
