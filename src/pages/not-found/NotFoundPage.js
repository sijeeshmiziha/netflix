import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const history = useHistory();

  return (
    <div className="notFoundScreen">
      <header className="notFoundScreen__header">
        <button
          type="button"
          className="notFoundScreen__logoBtn"
          onClick={() => history.push('/browse')}
          aria-label="Home"
        >
          <img
            className="notFoundScreen__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </button>
      </header>
      <div className="notFoundScreen__body">
        <h1 className="notFoundScreen__title">Lost?</h1>
        <p className="notFoundScreen__text">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.
        </p>
        <button
          type="button"
          className="notFoundScreen__btn"
          onClick={() => history.push('/browse')}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
