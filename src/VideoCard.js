import React from "react";
import "./VideoCard.css";
import Avatar from "@mui/material/Avatar";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="VideoCard">
      <img className="videocard-thumbnail" src={image} alt={title} />
      <div className="video-info">
        <Avatar
          className="avatar"
          alt={channel}
          src={channelImage}
          sx={{ width: 30, height: 30 }}
        />
        <div className="video-text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
