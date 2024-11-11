"use client";
import scss from "./VideoModails.module.scss";

const VideoModals = () => {
return (
    <div className={scss.VideoModals}>
      <div className={scss.modalsContainer}  onClick={(e) => e.stopPropagation()}>
        <button className={scss.closeButton}>
          ×
        </button>
        <iframe
          width="800px"
          height="450px"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModals;
