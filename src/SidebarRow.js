import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
      <Icon className="sidebarrow-icons" />
      <h2 className="sidebarrow-title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
