import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="video-row">
      <img src={image} alt={title} />
      <div className="video-info">
        <h3>{title}</h3>
        <div className="video-data">
          <span className="views">{views} views</span>
          <span className="separator"> • </span>
          <span className="timestamp">{timestamp}</span>
        </div>
        <p>{description}</p>
        <div className="video-channel">
          <img src={channel.image} alt={channel.name} />
          <h4>{channel.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
