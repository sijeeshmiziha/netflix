import React, { useState } from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './CookiePreferencesPage.css';

const COOKIE_TYPES = [
  {
    id: 'essential',
    name: 'Essential',
    desc: 'Required for the service to work. These cannot be disabled.',
  },
  {
    id: 'preferences',
    name: 'Preferences',
    desc: 'Remember your settings and choices (e.g. language, region).',
  },
  {
    id: 'analytics',
    name: 'Analytics',
    desc: 'Help us understand how you use the service so we can improve it.',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    desc: 'Used to deliver relevant ads and measure ad campaign effectiveness.',
  },
];

function CookiePreferencesPage() {
  const [prefs, setPrefs] = useState({
    preferences: true,
    analytics: true,
    marketing: false,
  });

  const handleToggle = (id) => {
    if (id === 'essential') return;
    setPrefs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSave = () => {
    // In a real app this would persist preferences
    alert('Cookie preferences saved.');
  };

  return (
    <InfoLayout title="Cookie Preferences">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">What are cookies?</h2>
        <p className="infoPage__text">
          Cookies and similar technologies are small files stored on your device
          when you use our service. They help us provide, protect, and improve
          Netflix, for example by remembering your preferences and understanding
          how you use the service.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Manage your preferences</h2>
        <p className="infoPage__text">
          You can choose which types of cookies we use. Essential cookies are
          always on because they are necessary for the service to function.
        </p>
        <ul className="cookiePrefs__list">
          {COOKIE_TYPES.map(({ id, name, desc }) => (
            <li key={id} className="cookiePrefs__item">
              <div className="cookiePrefs__info">
                <span className="cookiePrefs__name">{name}</span>
                <span className="cookiePrefs__desc">{desc}</span>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={id === 'essential' ? true : prefs[id]}
                aria-label={`Toggle ${name} cookies`}
                className={`cookiePrefs__toggle ${
                  id === 'essential' || prefs[id]
                    ? 'cookiePrefs__toggle--on'
                    : ''
                }`}
                onClick={() => handleToggle(id)}
                disabled={id === 'essential'}
              >
                <span className="cookiePrefs__toggleThumb" />
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="cookiePrefs__save"
          onClick={handleSave}
        >
          Save preferences
        </button>
      </section>
    </InfoLayout>
  );
}

export default CookiePreferencesPage;
