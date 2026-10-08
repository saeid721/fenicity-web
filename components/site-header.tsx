'use client';

import Link from 'next/link';
import { ChevronDown, Menu, Search, MapPin, UserRound, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

type MenuItem = [string, string];

const categoryColumns: { title: string; items: MenuItem[] }[] = [
  {
    title: 'স্বাস্থ্য ও চিকিৎসা',
    items: [
      ['/doctors', 'ডাক্তার'],
      ['/hospitals', 'হাসপাতাল'],
      ['/diagnostic-centers', 'ডায়াগনস্টিক'],
      ['/blood', 'রক্ত'],
      ['/bus', 'বাসের সময়সূচী'],
      ['/train', 'ট্রেনের সময়সূচী'],
      ['/rent-car', 'গাড়ি ভাড়া'],
      ['/emergency-services', 'জরুরি সেবা'],
      ['/fire-services', 'ফায়ার সার্ভিস'],
      ['/courier-services', 'কুরিয়ার সার্ভিস'],
    ],
  },
  {
    title: 'স্থানীয় সেবা ও জীবনযাপন',
    items: [
      ['/electricity-offices', 'বিদ্যুৎ অফিস'],
      ['/police-stations', 'থানা-পুলিশ'],
      ['/shopping', 'শপিং'],
      ['/basa-vara', 'বাসা ভাড়া'],
      ['/hotels', 'হোটেল'],
      ['/restaurants', 'রেস্টুরেন্ট'],
      ['/mistri', 'মিস্ত্রি'],
      ['/entrepreneurs', 'উদ্যোক্তা'],
      ['/teachers', 'শিক্ষক'],
    ],
  },
  {
    title: 'তথ্য, শিক্ষা ও আবিষ্কার',
    items: [
      ['/institutes', 'শিক্ষা প্রতিষ্ঠান'],
      ['/parlours', 'পার্লার'],
      ['/jobs', 'চাকরি'],
      ['/news', 'নিউজ'],
      ['/website', 'ওয়েবসাইট'],
      ['/tourist-places', 'দর্শনীয় স্থান'],
      ['/flat-land', 'ফ্ল্যাট ও জমি'],
      ['/nursery', 'নার্সারি'],
      ['/videos', 'ভিডিও'],
    ],
  },
];

const primaryLinks: MenuItem[] = [
  ['/', 'Home'],
  ['/press', 'Press'],
  ['/promotions', 'Promotions'],
  ['/about', 'About us'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact us'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  const closeMobile = () => {
    setOpen(false);
    setMobileCategoryOpen(false);
  };

  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container site-header-inner">
        <Link
          href="/"
          className="site-brand"
          onClick={closeMobile}
          aria-label="Feni City home"
        >
          <span className="site-brand-mark">
            <MapPin size={21} strokeWidth={2.4} />
          </span>
          <span>Feni City</span>
        </Link>

        <nav className="desktop-main-nav" aria-label="Primary navigation">
          {primaryLinks.slice(0, 1).map(([href, label]) => (
            <Link key={href} href={href} className="top-nav-link">
              {label}
            </Link>
          ))}

          <div className="category-menu">
            <button type="button" className="top-nav-link category-trigger" aria-haspopup="true">
              <span>Category</span>
              <ChevronDown size={15} strokeWidth={2.5} />
            </button>

            <div className="category-mega-menu">
              <div className="category-mega-inner">
                <div className="category-mega-heading">
                  <div>
                    <span className="category-eyebrow">FENI CITY DIRECTORY</span>
                    <h2>আপনার প্রয়োজনীয় ক্যাটাগরি</h2>
                    <p>এক জায়গা থেকে ফেনী শহরের প্রয়োজনীয় সেবা, প্রতিষ্ঠান ও তথ্য খুঁজে নিন।</p>
                  </div>
                  <Link href="/search" className="mega-search-link">
                    সবকিছু খুঁজুন <ArrowUpRight size={16} />
                  </Link>
                </div>

                <div className="category-columns">
                  {categoryColumns.map((column) => (
                    <div className="category-column" key={column.title}>
                      <h3>{column.title}</h3>
                      <div className="category-column-list">
                        {column.items.map(([href, label]) => (
                          <Link key={href} href={href} className="category-item">
                            <span>{label}</span>
                            <ArrowUpRight size={14} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {primaryLinks.slice(1).map(([href, label]) => (
            <Link key={href} href={href} className="top-nav-link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <Link
            href="/search"
            className="header-icon-button"
            aria-label="Search"
          >
            <Search size={19} />
          </Link>
          <Link
            href="/profile"
            className="header-icon-button desktop-profile-button"
            aria-label="Profile"
          >
            <UserRound size={19} />
          </Link>
          <button
            className="mobile-menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-main-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-inner">
            {primaryLinks.slice(0, 1).map(([href, label]) => (
              <Link key={href} href={href} onClick={closeMobile} className="mobile-top-link">
                {label}
              </Link>
            ))}

            <div className="mobile-category">
              <button
                type="button"
                className="mobile-category-trigger"
                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                aria-expanded={mobileCategoryOpen}
              >
                <span>Category</span>
                <ChevronDown
                  size={18}
                  className={mobileCategoryOpen ? 'mobile-chevron-open' : ''}
                />
              </button>

              {mobileCategoryOpen && (
                <div className="mobile-category-panel">
                  {categoryColumns.map((column) => (
                    <div className="mobile-category-group" key={column.title}>
                      <h3>{column.title}</h3>
                      {column.items.map(([href, label]) => (
                        <Link key={href} href={href} onClick={closeMobile} className="mobile-category-item">
                          {label}
                          <ArrowUpRight size={14} />
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {primaryLinks.slice(1).map(([href, label]) => (
              <Link key={href} href={href} onClick={closeMobile} className="mobile-top-link">
                {label}
              </Link>
            ))}

            <Link href="/profile" onClick={closeMobile} className="mobile-profile-link">
              <UserRound size={17} /> My Profile
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
