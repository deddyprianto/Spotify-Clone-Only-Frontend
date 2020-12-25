export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "STATE_USER":
      return { ...state, user: action.userapi };
    case "GET_PLAYLIST":
      return { ...state, discover: action.discover };
    default:
      return state;
  }
};
export default reducer;
