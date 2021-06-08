import React from 'react';
import { Link } from 'react-router-dom';
import InfoLayout from '../../layouts/InfoLayout';
import './AudioSubtitlesPage.css';

function AudioSubtitlesPage() {
  return (
    <InfoLayout title="Audio and Subtitles">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Subtitles and captions</h2>
        <p className="infoPage__text">
          Netflix offers subtitles and closed captions for most titles. You can
          turn them on or off while watching, and choose from multiple languages
          when available.
        </p>
        <h3 className="audioSubtitles__subtitle">
          How to turn on subtitles or captions
        </h3>
        <ul className="infoPage__list">
          <li>
            While watching, move your cursor or tap the screen to show the
            playback controls.
          </li>
          <li>
            Click or tap the speech bubble or dialogue icon in the bottom-right
            corner.
          </li>
          <li>
            Select your preferred language from the list. Options may include
            subtitles (translation of dialogue) or closed captions (includes
            sound effects and speaker identification).
          </li>
        </ul>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Audio options</h2>
        <p className="infoPage__text">
          Many titles offer multiple audio tracks, including 5.1 surround sound
          and descriptive audio where available. You can change the audio
          language or format from the same menu where you select subtitles.
        </p>
        <ul className="infoPage__list">
          <li>
            <strong>Audio language:</strong> Choose the language for the
            programme’s dialogue.
          </li>
          <li>
            <strong>Audio description:</strong> Narration that describes what’s
            happening on screen. Visit our{' '}
            <Link to="/audio-description" className="audioSubtitles__link">
              Audio Description
            </Link>{' '}
            page for more details.
          </li>
        </ul>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Supported languages</h2>
        <p className="infoPage__text">
          The languages available for each title depend on the content. Netflix
          continues to add more languages and improve the quality of subtitles
          and dubbing. Check the title’s detail page before playing to see which
          audio and subtitle options are available.
        </p>
      </section>
    </InfoLayout>
  );
}

export default AudioSubtitlesPage;
