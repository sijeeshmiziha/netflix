import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_LINKS = [
  { text: 'Audio and Subtitles', path: '/audio-subtitles' },
  { text: 'Audio Description', path: '/audio-description' },
  { text: 'Help Centre', path: '/help' },
  { text: 'Gift Cards', path: '/gift-cards' },
  { text: 'Media Centre', path: '/media-centre' },
  { text: 'Investor Relations', path: '/investor-relations' },
  { text: 'Jobs', path: '/jobs' },
  { text: 'Terms of Use', path: '/terms-of-use' },
  { text: 'Privacy', path: '/privacy' },
  { text: 'Legal Notices', path: '/legal' },
  { text: 'Cookie Preferences', path: '/cookie-preferences' },
  { text: 'Corporate Information', path: '/corporate-info' },
  { text: 'Contact Us', path: '/contact' },
];

function Footer() {
  const [language, setLanguage] = useState('English');

  return (
    <footer className="footer">
      <p className="footer__contact">Questions? Call 000-800-040-1843</p>
      <ul className="footer__links">
        {FOOTER_LINKS.map(({ text, path }) => (
          <li key={path}>
            <Link to={path} className="footer__link">
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="footer__bottom">
        <select
          id="footer-lang"
          className="footer__languageSelect"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Select language"
        >
          <option value="English">English</option>
          <option value="Hindi">हिन्दी</option>
          <option value="Tamil">தமிழ்</option>
          <option value="Telugu">తెలుగు</option>
          <option value="Malayalam">മലയാളം</option>
          <option value="Kannada">ಕನ್ನಡ</option>
        </select>
        <p className="footer__service">Netflix India</p>
      </div>
    </footer>
  );
}

export default Footer;
