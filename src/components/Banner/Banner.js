import React, { useEffect, useState } from 'react';
import './Banner.css';
import { fetchTrending } from '../../api/tmdbService';
import { SkeletonBanner } from '../Skeleton';
import TmdbImage from '../TmdbImage';

function getMaturityBadge(item) {
  if (!item) return null;
  if (item.adult) return '18+';
  const vote = item.vote_average;
  if (vote >= 8) return '16+';
  if (vote >= 6) return '13+';
  return 'PG';
}

function Banner({ onMovieClick, onToggleList }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchTrending('day')
      .then((response) => {
        if (cancelled) return;
        const results = response.data?.results || [];
        const idx = Math.floor(Math.random() * Math.min(20, results.length));
        setMovie(results[idx] || null);
      })
      .catch(() => {
        if (!cancelled) setMovie(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <SkeletonBanner />;
  }

  if (!movie) {
    return (
      <div className="banner banner--empty">
        <div className="banner__content">
          <p className="banner__emptyText">Trending titles will appear here.</p>
        </div>
        <div className="banner__fade" />
      </div>
    );
  }

  const maturity = getMaturityBadge(movie);

  return (
    <div className="banner">
      <div className="banner__bg">
        <TmdbImage
          src={movie.backdrop_path}
          alt=""
          size="original"
          loading={undefined}
          className="banner__bgImg"
        />
      </div>
      <div className="banner__watermark" aria-hidden="true">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
          alt=""
          className="banner__watermarkImg"
        />
      </div>
      <button
        type="button"
        className="banner__mute"
        onClick={() => setMuted(!muted)}
        aria-label={muted ? 'Unmute' : 'Mute'}
        aria-pressed={muted}
      >
        {muted ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
      <div className="banner__content">
        {maturity && (
          <span className="banner__maturity" aria-label={`Rated ${maturity}`}>
            {maturity}
          </span>
        )}
        <h1 className="banner__title">{movie.title || movie.name}</h1>
        <div className="banner__buttons">
          <button
            type="button"
            className="banner__btn banner__btn--primary"
            onClick={() => onMovieClick?.(movie)}
            aria-label="Play"
          >
            <span
              className="banner__btnIcon banner__btnIcon--play"
              aria-hidden="true"
            />
            Play
          </button>
          <button
            type="button"
            className="banner__btn banner__btn--secondary"
            onClick={() => onMovieClick?.(movie)}
            aria-label="More Info"
          >
            <span
              className="banner__btnIcon banner__btnIcon--info"
              aria-hidden="true"
            />
            More Info
          </button>
          <button
            type="button"
            className="banner__btn banner__btn--secondary"
            onClick={() => onToggleList?.(movie)}
            aria-label="Add to My List"
          >
            <span
              className="banner__btnIcon banner__btnIcon--plus"
              aria-hidden="true"
            />
            My List
          </button>
        </div>
        <p className="banner__description">{movie.overview || ''}</p>
      </div>
      <div className="banner__fade" />
    </div>
  );
}

export default Banner;
