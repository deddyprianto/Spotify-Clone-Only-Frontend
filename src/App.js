import React, { useEffect } from "react";
import SpotifWebApi from "spotify-web-api-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getURLIfLogin } from "./Spotify";
import { stateValueProvider } from "./StateProvider";

const spotify = new SpotifWebApi();
function App() {
  const [{ user, token }, dispatch] = stateValueProvider();
  useEffect(() => {
    const testURL = getURLIfLogin();
    window.location.hash = "";
    const _token = testURL.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((res) => {
        dispatch({
          type: "STATE_USER",
          userapi: res,
        });
      });
    }
    spotify.getPlaylist("14nmEfG5ZAZLhYnYoGJP2o").then((data) => {
      dispatch({
        type: "GET_PLAYLIST",
        discover: data,
      });
    });
  }, []);
  return (
    <Router>
      {/* this is changes happen */}
      <div className="App">
        <Route path="/">
          {token ? <Player spotify={spotify} /> : <Login />}
        </Route>
      </div>
    </Router>
  );
}

export default App;
