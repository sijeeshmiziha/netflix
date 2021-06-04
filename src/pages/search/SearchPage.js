import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { searchMulti } from '../../api/tmdbService';
import TmdbImage from '../../components/TmdbImage';
import Footer from '../../components/Footer';
import { useDebounce } from '../../hooks/useDebounce';
import Loading from '../../components/Loading';
import { useModal } from '../../context/ModalContext';
import './SearchPage.css';

function SearchPage() {
  const { openModal } = useModal();
  const history = useHistory();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    searchMulti(debouncedQuery)
      .then((res) => {
        const list = (res.data.results || []).filter(
          (r) => r.media_type === 'movie' || r.media_type === 'tv'
        );
        setResults(list);
      })
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  return (
    <div className="searchScreen">
      <header className="searchScreen__header">
        <button
          type="button"
          className="searchScreen__back"
          onClick={() => history.push('/browse')}
          aria-label="Back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <input
          type="search"
          className="searchScreen__input"
          placeholder="Titles, people, genres"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </header>
      <div className="searchScreen__content">
        {loading && (
          <div className="searchScreen__loading">
            <Loading />
          </div>
        )}
        {!loading && debouncedQuery && results.length === 0 && (
          <div className="searchScreen__empty">
            No results for &quot;{debouncedQuery}&quot;
          </div>
        )}
        {!loading && results.length > 0 && (
          <div className="searchScreen__grid">
            {results.map((item) => (
              <button
                type="button"
                key={`${item.media_type}-${item.id}`}
                className="searchScreen__card"
                onClick={() => openModal(item)}
              >
                <div className="searchScreen__cardImg">
                  <TmdbImage
                    src={item.poster_path || item.backdrop_path}
                    alt={item.title || item.name || ''}
                    size="w500"
                    placeholderLabel={item.title || item.name}
                  />
                </div>
                <span className="searchScreen__cardTitle">
                  {item.title || item.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
