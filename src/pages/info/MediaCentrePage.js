import React from 'react';
import { Link } from 'react-router-dom';
import InfoLayout from '../../layouts/InfoLayout';
import './MediaCentrePage.css';

const PRESS_ITEMS = [
  {
    title: 'Netflix announces new slate of Indian films and series',
    date: '2024',
  },
  {
    title: 'Streaming and storytelling: our approach to global entertainment',
    date: '2024',
  },
  {
    title: 'Netflix and production partners commit to sustainable filming',
    date: '2024',
  },
];

function MediaCentrePage() {
  return (
    <InfoLayout title="Media Centre">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Press releases</h2>
        <p className="infoPage__text">
          The latest news from Netflix: new titles, partnerships, and company
          updates.
        </p>
        <ul className="mediaCentre__list">
          {PRESS_ITEMS.map((item, i) => (
            <li key={i} className="mediaCentre__listItem">
              <span className="mediaCentre__date">{item.date}</span>
              <span className="mediaCentre__title">{item.title}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">About Netflix</h2>
        <p className="infoPage__text">
          Netflix is one of the world’s leading entertainment services, with
          millions of members in over 190 countries enjoying TV series, films,
          and games across a wide variety of genres and languages.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Media contacts</h2>
        <p className="infoPage__text">
          For press and media enquiries, please use our{' '}
          <Link to="/contact" className="mediaCentre__link">
            Contact us
          </Link>{' '}
          page. We respond to verified media requests as quickly as possible.
        </p>
      </section>
    </InfoLayout>
  );
}

export default MediaCentrePage;
