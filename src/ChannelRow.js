import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channel-row">
      <Avatar className="ChannelRow-logo" src={image} alt={channel} />
      <div className="channel-details">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
