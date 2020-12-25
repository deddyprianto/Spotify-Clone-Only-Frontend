import React from "react";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import "./Body.css";
import Header from "./Header";
import { stateValueProvider } from "./StateProvider";
import SongRow from "./SongRow";
function Body({ spotify }) {
  const [{ discover }, dispatch] = stateValueProvider();

  // console.log(discover);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Minggu ini</h2>
          <p>{discover?.description}</p>
        </div>
      </div>
      <div className="body__song">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
