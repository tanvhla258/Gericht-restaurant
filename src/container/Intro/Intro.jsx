import React from "react";
import { useState } from "react";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  const handleVideo = function () {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      vidRef.current.pause();
    } else vidRef.current.play();
  };
  return (
    <div className="app__video">
      <video
        type="video/mp4"
        controls={false}
        loop
        muted
        ref={vidRef}
        src={meal}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
