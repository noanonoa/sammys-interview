import React from "react";
import sidebarButtonIcon from "./sidebarButtonIcon.png";
import "./SidebarButtons.scss";

export function AddLaneButton() {
  return (
    <div className="sidebar-button add-lane-button">
      <SidebarButtonIcon />
      Add lane
    </div>
  );
}

export function AddBarButton() {
  return (
    <div className="sidebar-button add-bar-button">
      <SidebarButtonIcon />
      Add bar
    </div>
  );
}

function SidebarButtonIcon() {
  return (
    <img
      className="sidebar-button-icon"
      src={sidebarButtonIcon}
      alt="drag-icon"
    />
  );
}
