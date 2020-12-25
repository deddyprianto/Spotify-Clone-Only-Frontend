import React from "react";
import "./Login.css";
import { loginSpotify } from "./Spotify";
function Login() {
  return (
    <div className="Login">
      <img
        className="logo__banner"
        src="./img/spotify__logo.png"
        alt="logo Spotify Music"
      />
      <a href={loginSpotify}>Login with your Spotify Account</a>
    </div>
  );
}

export default Login;
