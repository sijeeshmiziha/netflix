import React, { useEffect, useState, useRef, useCallback } from 'react';
import { fetchByPath, fetchVideos } from '../../api/tmdbService';
import close from './red-x.svg';
import './RowPost.css';
import ShowTrailer from '../ShowTrailer';
import MovieCard from '../MovieCard';
import { SkeletonRow } from '../Skeleton';

const SCROLL_AMOUNT = 400;

function RowPost({
  title,
  isSmall,
  api,
  onMovieClick,
  isInList,
  onToggleList,
}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoKey, setVideoKey] = useState();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const scrollRef = useRef(null);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchByPath(api)
      .then((response) => {
        if (cancelled) return;
        setMovies(response.data?.results || []);
      })
      .catch(() => {
        if (!cancelled) setMovies([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [api]);

  useEffect(() => {
    if (!loading && movies.length > 0) {
      const id = requestAnimationFrame(() => {
        updateScrollState();
      });
      const tid = setTimeout(updateScrollState, 100);
      return () => {
        cancelAnimationFrame(id);
        clearTimeout(tid);
      };
    }
  }, [loading, movies.length, updateScrollState]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => updateScrollState();
    el.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleMovieClick = (item) => {
    if (onMovieClick) {
      onMovieClick(item);
      return;
    }
    if (!item?.id) return;
    const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
    fetchVideos(item.id, mediaType)
      .then((response) => {
        const videoData = response.data?.results?.[0];
        setVideoKey(videoData ? videoData.key : null);
      })
      .catch(() => {
        setVideoKey(null);
      });
  };

  const handleShow = () => setVideoKey(undefined);

  if (loading) {
    return <SkeletonRow count={6} isSmall={isSmall} />;
  }

  const display = movies.map((m, index) => (
    <MovieCard
      key={m.id || index}
      item={m}
      isSmall={isSmall}
      onClick={handleMovieClick}
      onAddToList={onToggleList}
      isInList={isInList ? isInList(m) : false}
    />
  ));

  return (
    <>
      <div
        className="rowPost"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <h2 className="rowPost__title">{title}</h2>
        <div className="rowPost__sliderWrap">
          {canScrollLeft && (
            <button
              type="button"
              className={`rowPost__arrow rowPost__arrow--left ${
                showArrows ? 'rowPost__arrow--visible' : ''
              }`}
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
          )}
          <div
            className="rowPost__posters hide-scrollbar"
            ref={scrollRef}
            role="region"
            aria-label={title}
          >
            {display}
          </div>
          {canScrollRight && (
            <button
              type="button"
              className={`rowPost__arrow rowPost__arrow--right ${
                showArrows ? 'rowPost__arrow--visible' : ''
              }`}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          )}
        </div>
        <div
          className={
            videoKey
              ? 'rowPost__close'
              : 'rowPost__close rowPost__close--hidden'
          }
          onClick={handleShow}
          onKeyDown={(e) => e.key === 'Enter' && handleShow()}
          role="button"
          tabIndex={0}
          aria-label="Close video"
        >
          <img src={close} alt="" />
        </div>
      </div>
      <div className="rowPost__trailer">
        {videoKey && <ShowTrailer videoKey={videoKey} />}
      </div>
    </>
  );
}

export default RowPost;
