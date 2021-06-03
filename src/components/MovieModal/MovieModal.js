import React, { useEffect, useState } from 'react';
import { fetchDetails } from '../../api/tmdbService';
import ShowTrailer from '../ShowTrailer';
import { SkeletonModal } from '../Skeleton';
import TmdbImage from '../TmdbImage';
import './MovieModal.css';

function getMaturity(details) {
  if (!details) return null;
  if (details.adult) return '18+';
  const vote = details.vote_average;
  if (vote >= 8) return '16+';
  if (vote >= 6) return '13+';
  return 'PG';
}

function MovieModal({ item, onClose, isInList, onToggleList, onMovieClick }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);

  const mediaType = item?.media_type || (item?.title ? 'movie' : 'tv');
  const id = item?.id;

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    setLoading(true);
    let cancelled = false;
    fetchDetails(id, mediaType)
      .then((res) => {
        if (cancelled) return;
        setDetails(res.data);
        const videos = res.data.videos?.results || [];
        const trailer =
          videos.find((v) => v.type === 'Trailer' && v.site === 'YouTube') ||
          videos[0];
        setTrailerKey(trailer ? trailer.key : null);
      })
      .catch(() => {
        if (!cancelled) setDetails(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [id, mediaType]);

  if (!item) return null;

  if (loading) {
    return (
      <div
        className="movieModal"
        role="dialog"
        aria-modal="true"
        aria-busy="true"
      >
        <div className="movieModal__backdrop" onClick={onClose} />
        <div className="movieModal__content movieModal__content--loading">
          <button
            type="button"
            className="movieModal__close"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <SkeletonModal />
        </div>
      </div>
    );
  }

  const title = details?.title || details?.name || item?.title || item?.name;
  const overview = details?.overview || item?.overview;
  const backdrop = details?.backdrop_path || item?.backdrop_path;
  const releaseDate = details?.release_date || details?.first_air_date || '';
  const year = releaseDate ? releaseDate.split('-')[0] : '';
  const runtime = details?.runtime;
  const vote = details?.vote_average ?? item?.vote_average;
  const similar = details?.similar?.results ?? [];
  const cast = details?.credits?.cast?.slice(0, 8) ?? [];
  const genres = details?.genres?.map((g) => g.name) ?? [];
  const maturity = getMaturity(details || item);

  const fullItem = { ...item, ...details, media_type: mediaType };
  const inList =
    typeof isInList === 'function' ? isInList(fullItem) : Boolean(isInList);

  return (
    <div
      className="movieModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="movieModal-title"
    >
      <div className="movieModal__backdrop" onClick={onClose} />
      <div className="movieModal__content">
        <button
          type="button"
          className="movieModal__close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="movieModal__hero">
          <div className="movieModal__heroBg">
            <TmdbImage
              src={backdrop}
              alt=""
              size="original"
              loading={undefined}
              className="movieModal__heroImg"
            />
          </div>
          <div className="movieModal__heroGradient" />
          <div className="movieModal__heroInner">
            <h2 id="movieModal-title" className="movieModal__title">
              {title}
            </h2>
            <div className="movieModal__meta">
              {vote != null && (
                <span className="movieModal__match">
                  {Math.round(vote * 10)}% Match
                </span>
              )}
              {year && <span>{year}</span>}
              {runtime != null && <span>{runtime} min</span>}
              <span className="movieModal__hd">HD</span>
              {maturity && (
                <span className="movieModal__maturity">{maturity}</span>
              )}
            </div>
            <div className="movieModal__actions">
              <button
                type="button"
                className="movieModal__btn movieModal__btn--play"
                onClick={() => setShowTrailer(true)}
                disabled={!trailerKey}
              >
                <span className="movieModal__btnIcon movieModal__btnIcon--play" />
                Play
              </button>
              <button
                type="button"
                className="movieModal__btn movieModal__btn--secondary"
                onClick={() => onToggleList?.(fullItem)}
              >
                <span className="movieModal__btnIcon movieModal__btnIcon--add">
                  {inList ? '✓' : '+'}
                </span>
                My List
              </button>
              <button
                type="button"
                className="movieModal__btn movieModal__btn--icon"
                aria-label="I like this"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                </svg>
              </button>
              <button
                type="button"
                className="movieModal__btn movieModal__btn--icon"
                aria-label="Not for me"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4v-2h-2V5h-2z" />
                </svg>
              </button>
            </div>
            <p className="movieModal__overview">{overview}</p>
            {genres.length > 0 && (
              <p className="movieModal__genres">
                {genres.slice(0, 4).join(' • ')}
              </p>
            )}
          </div>
        </div>
        {showTrailer && trailerKey && (
          <div className="movieModal__trailer">
            <button
              type="button"
              className="movieModal__trailerClose"
              onClick={() => setShowTrailer(false)}
              aria-label="Close trailer"
            >
              &times;
            </button>
            <ShowTrailer videoKey={trailerKey} />
          </div>
        )}
        {cast.length > 0 && (
          <div className="movieModal__section">
            <h3 className="movieModal__sectionTitle">Cast</h3>
            <p className="movieModal__cast">
              {cast.map((c) => c.name).join(' • ')}
            </p>
          </div>
        )}
        {similar.length > 0 && (
          <div className="movieModal__section">
            <h3 className="movieModal__sectionTitle">More Like This</h3>
            <div className="movieModal__similarRow">
              {similar.slice(0, 8).map((s) => {
                const similarItem = {
                  ...s,
                  media_type: s.media_type || (s.title ? 'movie' : 'tv'),
                };
                return (
                  <button
                    type="button"
                    key={s.id}
                    className="movieModal__similarPosterWrap"
                    onClick={() => onMovieClick?.(similarItem)}
                  >
                    <TmdbImage
                      src={s.poster_path || s.backdrop_path}
                      alt={s.title || s.name || ''}
                      className="movieModal__similarPoster"
                      size="w500"
                      placeholderLabel={s.title || s.name}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieModal;
