import React, { useState } from 'react';
import TmdbImage from '../TmdbImage';
import './MovieCard.css';

function MovieCard({ item, isSmall, onClick, onAddToList, isInList }) {
  const [hover, setHover] = useState(false);
  const title = item?.title || item?.name;
  const poster = item?.backdrop_path || item?.poster_path;
  const vote = item?.vote_average;
  const match = vote != null ? Math.round(vote * 10) : null;

  const handleClick = (e) => {
    if (e.target.closest('.movieCard__actionBtn')) return;
    onClick?.(item);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.target.closest('.movieCard__actionBtn')) {
      onClick?.(item);
    }
  };

  return (
    <div
      className={`movieCard ${isSmall ? 'movieCard--small' : ''} ${
        hover ? 'movieCard--hover' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="movieCard__clickable"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={title ? `Play ${title}` : 'Play'}
      >
        <TmdbImage
          src={poster}
          alt=""
          className="movieCard__img"
          size="w500"
          placeholderLabel={title}
        />
        <div className="movieCard__overlay">
          <span className="movieCard__match">
            {match != null ? `${match}% Match` : ''}
          </span>
          <div className="movieCard__actions">
            <button
              type="button"
              className="movieCard__actionBtn movieCard__actionBtn--play"
              onClick={(e) => {
                e.stopPropagation();
                onClick?.(item);
              }}
              aria-label="Play"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            {onAddToList && (
              <button
                type="button"
                className="movieCard__actionBtn movieCard__actionBtn--add"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToList(item);
                }}
                aria-label={isInList ? 'Remove from My List' : 'Add to My List'}
              >
                {isInList ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                )}
              </button>
            )}
            <button
              type="button"
              className="movieCard__actionBtn movieCard__actionBtn--like"
              onClick={(e) => e.stopPropagation()}
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
              className="movieCard__actionBtn movieCard__actionBtn--dislike"
              onClick={(e) => e.stopPropagation()}
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
            <button
              type="button"
              className="movieCard__actionBtn movieCard__actionBtn--info"
              onClick={(e) => {
                e.stopPropagation();
                onClick?.(item);
              }}
              aria-label="More info"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm0-10C6.48 0 2 4.48 2 10s4.48 10 10 10 10-4.48 10-10S17.52 0 12 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </button>
          </div>
          <span className="movieCard__title">{title}</span>
        </div>
      </div>
      <span className="movieCard__titleBelow" aria-hidden="true">
        {title}
      </span>
    </div>
  );
}

export default MovieCard;
