import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoLayout from '../../layouts/InfoLayout';
import './HelpCentrePage.css';

const FAQ_SECTIONS = [
  {
    title: 'Getting Started',
    items: [
      {
        q: 'How do I create an account?',
        a: 'Go to Netflix.com and click Sign In, then Sign up now. Enter your email and create a password to get started.',
      },
      {
        q: 'What plans are available?',
        a: 'We offer several plans so you can choose the one that fits your needs. You can change or cancel your plan at any time.',
      },
      {
        q: 'How do I add a phone number?',
        a: 'Go to Account in the menu, then Membership & Billing. Under Phone number, add or update your number.',
      },
    ],
  },
  {
    title: 'Account & Billing',
    items: [
      {
        q: 'How do I update my payment method?',
        a: 'Sign in to Netflix and go to Account. Under Membership & Billing, select Payment details to update your payment method.',
      },
      {
        q: 'How do I cancel my membership?',
        a: 'You can cancel anytime. Go to Account, then Membership & Billing, and click Cancel membership. You can continue watching until the end of your billing period.',
      },
      {
        q: 'Why was I charged?',
        a: 'Check your billing history in Account under Membership & Billing. You can also download your invoices from that page.',
      },
    ],
  },
  {
    title: 'Watching Netflix',
    items: [
      {
        q: "Why isn't Netflix working?",
        a: 'Check your internet connection, restart your device, or try signing out and back in. Visit our streaming troubleshooting guide for more steps.',
      },
      {
        q: 'How do I download titles to watch offline?',
        a: 'Open the Netflix app, find the title you want, and tap the Download button. You can manage downloads in the Downloads tab.',
      },
      {
        q: 'How do I change the quality of what I watch?',
        a: 'Playback quality is set automatically based on your connection. You can adjust data usage in Account under Playback settings.',
      },
    ],
  },
];

function HelpCentrePage() {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <InfoLayout title="Help Centre">
      <section className="helpCentre__search">
        <label htmlFor="help-search" className="helpCentre__searchLabel">
          What do you need help with?
        </label>
        <input
          id="help-search"
          type="search"
          className="helpCentre__searchInput"
          placeholder="Search for help"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search help articles"
        />
      </section>
      <section className="helpCentre__quickLinks">
        <h2 className="infoPage__sectionTitle">Quick links</h2>
        <ul className="helpCentre__quickList">
          <li>
            <Link to="/contact" className="helpCentre__quickLink">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/audio-subtitles" className="helpCentre__quickLink">
              Audio and subtitles
            </Link>
          </li>
          <li>
            <Link to="/gift-cards" className="helpCentre__quickLink">
              Redeem a gift card
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="helpCentre__quickLink">
              Privacy and security
            </Link>
          </li>
        </ul>
      </section>
      <section className="helpCentre__faq">
        <h2 className="infoPage__sectionTitle">Frequently asked questions</h2>
        {FAQ_SECTIONS.map((section, sectionIdx) => (
          <div key={sectionIdx} className="helpCentre__faqSection">
            <h3 className="helpCentre__faqSectionTitle">{section.title}</h3>
            {section.items.map((item, itemIdx) => {
              const idx = `${sectionIdx}-${itemIdx}`;
              const isOpen = openIndex === idx;
              return (
                <div key={itemIdx} className="helpCentre__faqItem">
                  <button
                    type="button"
                    className="helpCentre__faqQuestion"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className="helpCentre__faqIcon">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="helpCentre__faqAnswer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Still need help?</h2>
        <p className="infoPage__text">
          Questions? Call{' '}
          <a href="tel:000-800-040-1843" className="helpCentre__phone">
            000-800-040-1843
          </a>{' '}
          or visit our{' '}
          <Link to="/contact" className="helpCentre__quickLink">
            Contact us
          </Link>{' '}
          page.
        </p>
      </section>
    </InfoLayout>
  );
}

export default HelpCentrePage;
