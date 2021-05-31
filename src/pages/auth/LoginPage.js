import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchTrending } from '../../api/tmdbService';
import TmdbImage from '../../components/TmdbImage';
import './LoginPage.css';

function LoginPage() {
  const history = useHistory();
  const [backdropPath, setBackdropPath] = useState('');

  useEffect(() => {
    fetchTrending('day')
      .then((res) => {
        const results = res.data.results || [];
        const random =
          results[Math.floor(Math.random() * Math.min(10, results.length))];
        if (random?.backdrop_path) {
          setBackdropPath(random.backdrop_path);
        }
      })
      .catch(() => setBackdropPath(''));
  }, []);

  return (
    <div className="loginScreen">
      <div className="loginScreen__bg">
        <TmdbImage
          src={backdropPath}
          alt=""
          size="original"
          loading={undefined}
          className="loginScreen__bgImg"
        />
      </div>
      <div className="loginScreen__gradient" />
      <header className="loginScreen__header">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
        <button
          className="loginScreen__signIn"
          onClick={() => history.push('/profile')}
        >
          Sign In
        </button>
      </header>
      <div className="loginScreen__body">
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <p>Ready to watch? Click Sign In to select your profile.</p>
      </div>
    </div>
  );
}

export default LoginPage;
