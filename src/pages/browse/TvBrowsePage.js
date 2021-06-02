import React from 'react';
import BrowseLayout from '../../layouts/BrowseLayout';
import Banner from '../../components/Banner';
import RowPost from '../../components/RowPost';
import { useModal } from '../../context/ModalContext';
import { useMyListContext } from '../../context/MyListContext';
import {
  originals,
  tvPopular,
  tvTopRated,
  trendingTvWeek,
} from '../../config/urls';
import './TvBrowsePage.css';

function TvBrowsePage() {
  const { openModal } = useModal();
  const { isInList, toggle: onToggleList } = useMyListContext();
  const rowProps = { onMovieClick: openModal, isInList, onToggleList };
  return (
    <BrowseLayout>
      <div className="tvBrowseScreen browseScreen">
        <Banner onMovieClick={openModal} onToggleList={onToggleList} />
        <div className="browseScreen__rows">
          <RowPost
            title="Trending TV This Week"
            api={trendingTvWeek}
            {...rowProps}
          />
          <RowPost title="Netflix Originals" api={originals} {...rowProps} />
          <RowPost title="Popular TV Shows" api={tvPopular} {...rowProps} />
          <RowPost title="Top Rated TV" api={tvTopRated} {...rowProps} />
        </div>
      </div>
    </BrowseLayout>
  );
}

export default TvBrowsePage;
