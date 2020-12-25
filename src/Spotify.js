export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectURL = "http://localhost:3000/";
const clientID = "4a2e36561e3b44abace223f55e7e282b";
const token =
  "BQBPv87oW3KMlY_nHmweNAzo56PhlzhO9YU-CKUo64CrUyRdbsgMZGQiukbQfyovI3DKYHqgZ_4OD41Zi6_3QFNuOKjoQ5TdT12fX5-nZR8tBpHamK3yXglm6cELUwCzeclmXgwZfME_uEWqD0T9ZgNa5JdetlsBb-ncBuj_c4jPItNp8-s";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getURLIfLogin = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((acc, curr) => {
      let init = curr.split("=");
      acc[init[0]] = decodeURIComponent(init[1]);
      return acc;
    }, {});
};
export const loginSpotify = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
