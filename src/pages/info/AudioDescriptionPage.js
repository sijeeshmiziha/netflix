import React from 'react';
import { Link } from 'react-router-dom';
import InfoLayout from '../../layouts/InfoLayout';
import './AudioDescriptionPage.css';

function AudioDescriptionPage() {
  return (
    <InfoLayout title="Audio Description">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">What is audio description?</h2>
        <p className="infoPage__text">
          Audio description is an optional narration that describes what’s
          happening on screen—including actions, settings, and facial
          expressions. It’s designed for people who are blind or have low
          vision, but anyone can use it to get more from their viewing
          experience.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">
          How to turn on audio description
        </h2>
        <ul className="infoPage__list">
          <li>Start playing a title that supports audio description.</li>
          <li>
            Move your cursor or tap the screen to show the playback controls.
          </li>
          <li>Click or tap the speech bubble or dialogue icon.</li>
          <li>
            Under Audio, select the option that includes “Audio Description” or
            “AD” in the name.
          </li>
        </ul>
        <p className="infoPage__text">
          Not all titles have audio description. Look for the “AD” or “Audio
          Description” badge on the title’s detail page, or filter by “Audio
          Description” in the Netflix menu.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">More accessibility options</h2>
        <p className="infoPage__text">
          For subtitles, captions, and other audio and display settings, visit
          our{' '}
          <Link to="/audio-subtitles" className="audioDesc__link">
            Audio and Subtitles
          </Link>{' '}
          page.
        </p>
      </section>
    </InfoLayout>
  );
}

export default AudioDescriptionPage;
