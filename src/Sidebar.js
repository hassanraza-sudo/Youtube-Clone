import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import Whatshot from "@mui/icons-material/Whatshot";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow slected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={Whatshot} title="Trending" />
      <SidebarRow Icon={SubscriptionIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="library" />
      <SidebarRow Icon={HistoryIcon} title="HistoryIcon" />
      <SidebarRow Icon={OndemandVideoIcon} title="OndemandVideoIcon" />
      <SidebarRow Icon={WatchLaterIcon} title="WatchLaterIcon" />
      <SidebarRow
        Icon={ThumbUpAltOutlinedIcon}
        title="ThumbupAltOutlinedIcon"
      />
      <SidebarRow
        Icon={ExpandMoreOutlinedIcon}
        title="ExpandMoreOutlinedIcon"
      />
    </div>
  );
}

export default Sidebar;
