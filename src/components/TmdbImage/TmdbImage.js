import React, { useState, useMemo } from 'react';
import { imageUrl, imageUrlW500 } from '../../config/constants';
import './TmdbImage.css';

const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect fill='%231a1a1a' width='400' height='225'/%3E%3Cg fill='%23444'%3E%3Cpath d='M160 85c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm10 35c-15.5 0-28 12.5-28 28h56c0-15.5-12.5-28-28-28z'/%3E%3C/g%3E%3Ctext fill='%23555' x='50%25' y='75%25' dominant-baseline='middle' text-anchor='middle' font-size='14' font-family='sans-serif'%3ENo image%3C/text%3E%3C/svg%3E";

function buildSrc(path, size) {
  if (!path || typeof path !== 'string') return null;
  const p = path.startsWith('/') ? path : `/${path}`;
  const base = size === 'w500' ? imageUrlW500 : imageUrl;
  return base + p;
}

function TmdbImage({
  src,
  alt = '',
  className = '',
  size = 'w500',
  loading = 'lazy',
  placeholderLabel,
  onLoad,
  onError,
  ...imgProps
}) {
  const fullSrc = useMemo(
    () => (src ? buildSrc(src, size) : null),
    [src, size]
  );
  const [loadingState, setLoadingState] = useState(!!fullSrc);
  const [failed, setFailed] = useState(false);

  const handleLoad = (e) => {
    setLoadingState(false);
    setFailed(false);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setLoadingState(false);
    setFailed(true);
    onError?.(e);
  };

  if (!fullSrc) {
    return (
      <div
        className={`tmdbImage tmdbImage--placeholder ${className}`}
        aria-label={alt}
      >
        {placeholderLabel ? (
          <span className="tmdbImage__label">{placeholderLabel}</span>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`tmdbImage ${className}`}>
      {loadingState && !failed && (
        <div className="tmdbImage__loader" aria-hidden="true">
          <div className="tmdbImage__shimmer" />
        </div>
      )}
      {failed ? (
        <div className="tmdbImage__placeholder" aria-label={alt}>
          <img
            src={PLACEHOLDER_SVG}
            alt=""
            className="tmdbImage__placeholderImg"
            aria-hidden="true"
          />
          {placeholderLabel ? (
            <span className="tmdbImage__label">{placeholderLabel}</span>
          ) : null}
        </div>
      ) : (
        <img
          src={fullSrc}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`tmdbImage__img ${
            loadingState ? 'tmdbImage__img--loading' : ''
          }`}
          {...imgProps}
        />
      )}
    </div>
  );
}

export default TmdbImage;
