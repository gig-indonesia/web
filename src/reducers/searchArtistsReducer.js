import { FETCH_DATA_SEARCH_ARTISTS } from "../action/types";
const initialState = {
  searchArtists: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SEARCH_ARTISTS:
      return {
        ...state,
        searchArtists: action.payload
      };
    default:
      return state;
  }
};
