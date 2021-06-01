import React from 'react';
import BrowseLayout from '../../layouts/BrowseLayout';
import Banner from '../../components/Banner';
import RowPost from '../../components/RowPost';
import { useModal } from '../../context/ModalContext';
import { useMyListContext } from '../../context/MyListContext';
import {
  actions,
  comedy,
  documentary,
  horror,
  romance,
  moviePopular,
  movieTopRated,
  movieUpcoming,
  movieNowPlaying,
  trendingMovieWeek,
} from '../../config/urls';
import './MoviesBrowsePage.css';

function MoviesBrowsePage() {
  const { openModal } = useModal();
  const { isInList, toggle: onToggleList } = useMyListContext();
  const rowProps = { onMovieClick: openModal, isInList, onToggleList };
  return (
    <BrowseLayout>
      <div className="moviesBrowseScreen browseScreen">
        <Banner onMovieClick={openModal} onToggleList={onToggleList} />
        <div className="browseScreen__rows">
          <RowPost
            title="Trending Movies This Week"
            api={trendingMovieWeek}
            {...rowProps}
          />
          <RowPost title="Popular Movies" api={moviePopular} {...rowProps} />
          <RowPost title="Top Rated Movies" api={movieTopRated} {...rowProps} />
          <RowPost title="Upcoming" api={movieUpcoming} isSmall {...rowProps} />
          <RowPost
            title="Now Playing"
            api={movieNowPlaying}
            isSmall
            {...rowProps}
          />
          <RowPost title="Action Movies" api={actions} isSmall {...rowProps} />
          <RowPost title="Romantic Movies" api={romance} {...rowProps} />
          <RowPost title="Comedy Movies" api={comedy} isSmall {...rowProps} />
          <RowPost title="Horror Movies" api={horror} isSmall {...rowProps} />
          <RowPost
            title="Documentaries"
            api={documentary}
            isSmall
            {...rowProps}
          />
        </div>
      </div>
    </BrowseLayout>
  );
}

export default MoviesBrowsePage;
