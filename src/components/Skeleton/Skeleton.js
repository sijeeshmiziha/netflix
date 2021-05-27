import React from 'react';
import './Skeleton.css';

function Skeleton({ variant = 'rect', width, height, className = '' }) {
  const classes = ['skeleton', `skeleton--${variant}`, className]
    .filter(Boolean)
    .join(' ');
  const style = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height)
    style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={classes}
      style={Object.keys(style).length ? style : undefined}
      aria-hidden="true"
    />
  );
}

export function SkeletonBanner() {
  return (
    <div className="skeletonBanner">
      <div className="skeletonBanner__bg skeleton" />
      <div className="skeletonBanner__content">
        <Skeleton
          variant="text"
          height={48}
          className="skeletonBanner__title"
        />
        <div className="skeletonBanner__buttons">
          <Skeleton
            variant="rect"
            height={46}
            className="skeletonBanner__btn"
          />
          <Skeleton
            variant="rect"
            height={46}
            className="skeletonBanner__btn"
          />
        </div>
        <div className="skeletonBanner__lines">
          <Skeleton variant="text" height={16} />
          <Skeleton variant="text" height={16} />
          <Skeleton variant="text" height={16} width="60%" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonCard({ isSmall = false }) {
  const width = isSmall ? 180 : 250;
  const height = isSmall ? 100 : 140;
  return (
    <Skeleton
      variant="rect"
      width={width}
      height={height}
      className="skeletonCard"
    />
  );
}

export function SkeletonRow({ count = 6, isSmall = false }) {
  return (
    <div className="skeletonRow">
      <Skeleton
        variant="text"
        height={22}
        width={180}
        className="skeletonRow__title"
      />
      <div className="skeletonRow__cards">
        {Array.from({ length: count }, (_, i) => (
          <SkeletonCard key={i} isSmall={isSmall} />
        ))}
      </div>
    </div>
  );
}

export function SkeletonModal() {
  return (
    <div className="skeletonModal">
      <div className="skeletonModal__hero skeleton" />
      <div className="skeletonModal__body">
        <Skeleton
          variant="text"
          height={36}
          width="40%"
          className="skeletonModal__title"
        />
        <div className="skeletonModal__actions">
          <Skeleton variant="rect" height={44} width={120} />
          <Skeleton variant="rect" height={44} width={44} />
          <Skeleton variant="rect" height={44} width={44} />
        </div>
        <div className="skeletonModal__lines">
          <Skeleton variant="text" height={14} />
          <Skeleton variant="text" height={14} width="80%" />
          <Skeleton variant="text" height={14} width="60%" />
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
