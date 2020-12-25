import React from "react";
import { Home, Search, LibraryMusic, Add, Favorite } from "@material-ui/icons";

import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      <img src="./img/spotify__logo.png" className="Sidebar__logo" alt="logo" />
      <SidebarOption Icon={Home} title={"Home"} />
      <SidebarOption Icon={Search} title={"Search"} />
      <SidebarOption Icon={LibraryMusic} title={"Your Library"} />
      <br />
      <strong className="Sidebar__title">PLAYLISTS</strong>
      <div className="kotak__tambahOption">
        <div className="kotak">
          <Add />
        </div>
        <p>Buat Playlist</p>
      </div>
      <div className="kotak__sukaOption">
        <div className="hati">
          <Favorite fontSize="small" />
        </div>
        <p>Lagu yang Disukai</p>
      </div>
      <hr />
      <SidebarOption title="Playlist Saya Tahun ini" />
      <SidebarOption title="Playlist For Editor" />
      <SidebarOption title="My Channel Music Top Celebratting" />
      <SidebarOption title="Playlist Education" />
      <SidebarOption title="Playlist codewars" />
      <SidebarOption title="Playlist fun & joy" />
      <SidebarOption title="Playlist Saya Tahun ini" />
      <SidebarOption title="Playlist For Editor" />
      <SidebarOption title="My Channel Music Top Celebratting" />
      <SidebarOption title="Playlist Education" />
      <SidebarOption title="Playlist codewars" />
      <SidebarOption title="Playlist fun & joy" />
    </div>
  );
}

export default Sidebar;
