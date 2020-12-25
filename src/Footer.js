import React, { useState } from "react";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
  Pause,
} from "@material-ui/icons";
import { Grid, Slider, IconButton } from "@material-ui/core";
import "./Footer.css";
function Footer() {
  const [press, setPress] = useState(false);
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453"
          alt="this"
        />
        <div className="footer__songInfo">
          <h4>Closer</h4>
          <p>The ChainsMokers Feat HalseyCloser</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <IconButton onClick={() => setPress(true)}>
          {press === false ? (
            <PlayCircleOutline
              fontSize="large"
              className="footer__icon footer__me"
            />
          ) : (
            <Pause fontSize="large" className="footer__icon footer__me" />
          )}
        </IconButton>
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
