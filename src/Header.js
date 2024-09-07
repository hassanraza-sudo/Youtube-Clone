import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import profilePic from "./images/Profile picture.png";

function Header() {
  const [inputSearch, setinputSearch] = useState();
  return (
    <div className="header">
      <div className="Logo">
        <MenuIcon />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/1200px-YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className="youtube-logo "
            style={{ width: "33px", height: "26px", marginRight: "2px" }}
          />
          <span class="youtube-text">YouTube</span>
        </Link>
      </div>
      <div className="header-input">
        <input
          onchange={(e) => setinputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="search-inputButton" />
        </Link>
      </div>
      <div className="header-icons">
        <VideoCallIcon />
        <NotificationsIcon />
        <Avatar alt="Hassan Raza" src={profilePic} />
      </div>
    </div>
  );
}

export default Header;
