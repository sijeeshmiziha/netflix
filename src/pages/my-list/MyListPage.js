import React from 'react';
import { useHistory } from 'react-router-dom';
import BrowseLayout from '../../layouts/BrowseLayout';
import TmdbImage from '../../components/TmdbImage';
import { useModal } from '../../context/ModalContext';
import { useMyListContext } from '../../context/MyListContext';
import './MyListPage.css';

function MyListPage() {
  const history = useHistory();
  const { openModal } = useModal();
  const { list: myList, remove: onRemove } = useMyListContext();
  return (
    <BrowseLayout>
      <div className="myListScreen">
        <div className="myListScreen__header">
          <button
            type="button"
            className="myListScreen__back"
            onClick={() => history.push('/browse')}
          >
            Back
          </button>
          <h1 className="myListScreen__title">My List</h1>
        </div>
        <div className="myListScreen__content">
          {myList.length === 0 ? (
            <div className="myListScreen__empty">
              <p>Your list is empty.</p>
              <p>
                Add titles from Browse or Search by clicking &quot;+ My
                List&quot; on a title.
              </p>
            </div>
          ) : (
            <div className="myListScreen__grid">
              {myList.map((item) => (
                <div
                  key={`${item.media_type || 'movie'}-${item.id}`}
                  className="myListScreen__card"
                >
                  <button
                    type="button"
                    className="myListScreen__cardImgWrap"
                    onClick={() => openModal(item)}
                  >
                    <TmdbImage
                      src={item.poster_path || item.backdrop_path}
                      alt={item.title || item.name || ''}
                      size="w500"
                      placeholderLabel={item.title || item.name}
                      className="myListScreen__cardImg"
                    />
                  </button>
                  <div className="myListScreen__cardInfo">
                    <span className="myListScreen__cardTitle">
                      {item.title || item.name}
                    </span>
                    {onRemove && (
                      <button
                        type="button"
                        className="myListScreen__remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemove(item);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </BrowseLayout>
  );
}

export default MyListPage;
