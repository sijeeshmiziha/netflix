import React from 'react';
import BrowseLayout from '../../layouts/BrowseLayout';
import Banner from '../../components/Banner';
import RowPost from '../../components/RowPost';
import { useModal } from '../../context/ModalContext';
import { useMyListContext } from '../../context/MyListContext';
import {
  trendingAllWeek,
  moviePopular,
  tvPopular,
  movieTopRated,
  tvTopRated,
} from '../../config/urls';
import './NewAndPopularPage.css';

function NewAndPopularPage() {
  const { openModal } = useModal();
  const { isInList, toggle: onToggleList } = useMyListContext();
  const rowProps = { onMovieClick: openModal, isInList, onToggleList };
  return (
    <BrowseLayout>
      <div className="newAndPopularScreen browseScreen">
        <Banner onMovieClick={openModal} onToggleList={onToggleList} />
        <div className="browseScreen__rows">
          <RowPost
            title="Trending This Week"
            api={trendingAllWeek}
            {...rowProps}
          />
          <RowPost title="Popular Movies" api={moviePopular} {...rowProps} />
          <RowPost title="Popular TV Shows" api={tvPopular} {...rowProps} />
          <RowPost
            title="Top Rated Movies"
            api={movieTopRated}
            isSmall
            {...rowProps}
          />
          <RowPost
            title="Top Rated TV"
            api={tvTopRated}
            isSmall
            {...rowProps}
          />
        </div>
      </div>
    </BrowseLayout>
  );
}

export default NewAndPopularPage;
