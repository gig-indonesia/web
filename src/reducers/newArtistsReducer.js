import { FETCH_DATA_NEW_ARTISTS } from "../action/types";
const initialState = {
  newArtists: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_NEW_ARTISTS:
      return {
        ...state,
        newArtists: action.payload
      };
    default:
      return state;
  }
};
