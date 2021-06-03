import React from 'react';
import YouTube from 'react-youtube';
import './ShowTrailer.css';

function ShowTrailer({ videoKey }) {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="show-trailer">
      <div className="show-trailer__wrapper">
        <YouTube opts={opts} videoId={videoKey} />
      </div>
    </div>
  );
}

export default ShowTrailer;
