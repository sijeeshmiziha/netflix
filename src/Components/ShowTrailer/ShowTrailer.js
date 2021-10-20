import React from "react";
import YouTube from "react-youtube";
function ShowTrailer({ videoKey }) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="show-trailer">
      <YouTube opts={opts} videoId={videoKey} />
    </div>
  );
}

export default ShowTrailer;
