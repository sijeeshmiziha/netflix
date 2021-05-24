import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const history = useHistory();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBrowse = location.pathname === '/browse';
  const isTv = location.pathname === '/browse/tv';
  const isMovies = location.pathname === '/browse/movies';
  const isTrending = location.pathname === '/browse/trending';
  const isMyList = location.pathname === '/mylist';

  const infoPagePaths = [
    '/audio-subtitles',
    '/audio-description',
    '/help',
    '/gift-cards',
    '/media-centre',
    '/investor-relations',
    '/jobs',
    '/terms-of-use',
    '/privacy',
    '/legal',
    '/cookie-preferences',
    '/corporate-info',
    '/contact',
  ];
  const isInfoPage = infoPagePaths.includes(location.pathname);
  const showSolidNav = scrolled || isInfoPage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${showSolidNav ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__left">
        <button
          type="button"
          className="navbar__logoBtn"
          onClick={() => history.push('/browse')}
          aria-label="Home"
        >
          <img
            className="navbar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </button>
        <button
          type="button"
          className="navbar__hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="navbar__hamburgerBar" />
          <span className="navbar__hamburgerBar" />
          <span className="navbar__hamburgerBar" />
        </button>
        <ul className="navbar__links">
          <li>
            <button
              type="button"
              className={`navbar__link navbar__link--btn ${
                isBrowse ? 'navbar__link--active' : ''
              }`}
              onClick={() => history.push('/browse')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`navbar__link navbar__link--btn ${
                isTv ? 'navbar__link--active' : ''
              }`}
              onClick={() => history.push('/browse/tv')}
            >
              TV Shows
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`navbar__link navbar__link--btn ${
                isMovies ? 'navbar__link--active' : ''
              }`}
              onClick={() => history.push('/browse/movies')}
            >
              Movies
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`navbar__link navbar__link--btn ${
                isTrending ? 'navbar__link--active' : ''
              }`}
              onClick={() => history.push('/browse/trending')}
            >
              New & Popular
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`navbar__link navbar__link--btn ${
                isMyList ? 'navbar__link--active' : ''
              }`}
              onClick={() => history.push('/mylist')}
            >
              My List
            </button>
          </li>
        </ul>
      </div>
      <div
        className={`navbar__mobileMenu ${
          mobileMenuOpen ? 'navbar__mobileMenu--open' : ''
        }`}
      >
        <button
          type="button"
          className={`navbar__mobileMenuItem ${
            isBrowse ? 'navbar__mobileMenuItem--active' : ''
          }`}
          onClick={() => {
            history.push('/browse');
            closeMobileMenu();
          }}
        >
          Home
        </button>
        <button
          type="button"
          className={`navbar__mobileMenuItem ${
            isTv ? 'navbar__mobileMenuItem--active' : ''
          }`}
          onClick={() => {
            history.push('/browse/tv');
            closeMobileMenu();
          }}
        >
          TV Shows
        </button>
        <button
          type="button"
          className={`navbar__mobileMenuItem ${
            isMovies ? 'navbar__mobileMenuItem--active' : ''
          }`}
          onClick={() => {
            history.push('/browse/movies');
            closeMobileMenu();
          }}
        >
          Movies
        </button>
        <button
          type="button"
          className={`navbar__mobileMenuItem ${
            isTrending ? 'navbar__mobileMenuItem--active' : ''
          }`}
          onClick={() => {
            history.push('/browse/trending');
            closeMobileMenu();
          }}
        >
          New & Popular
        </button>
        <button
          type="button"
          className={`navbar__mobileMenuItem ${
            isMyList ? 'navbar__mobileMenuItem--active' : ''
          }`}
          onClick={() => {
            history.push('/mylist');
            closeMobileMenu();
          }}
        >
          My List
        </button>
      </div>
      <div className="navbar__right">
        <button
          type="button"
          className="navbar__iconBtn"
          onClick={() => history.push('/search')}
          aria-label="Search"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
        <button
          type="button"
          className="navbar__iconBtn"
          aria-label="Notifications"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </button>
        <div className="navbar__profileWrap">
          <button
            type="button"
            className="navbar__avatarBtn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <img
              className="navbar__avatar"
              src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
              alt="Profile"
            />
          </button>
          {dropdownOpen && (
            <>
              <div
                className="navbar__dropdownBackdrop"
                onClick={() => setDropdownOpen(false)}
                aria-hidden="true"
              />
              <div className="navbar__dropdown">
                <span className="navbar__dropdownArrow" />
                <button
                  type="button"
                  className="navbar__dropdownItem"
                  onClick={() => {
                    setDropdownOpen(false);
                    history.push('/profile');
                  }}
                >
                  Account
                </button>
                <button
                  type="button"
                  className="navbar__dropdownItem"
                  onClick={() => {
                    setDropdownOpen(false);
                    history.push('/help');
                  }}
                >
                  Help Centre
                </button>
                <button
                  type="button"
                  className="navbar__dropdownItem"
                  onClick={() => {
                    setDropdownOpen(false);
                    history.push('/');
                  }}
                >
                  Sign out of Netflix
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
