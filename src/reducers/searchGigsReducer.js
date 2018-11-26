import { FETCH_DATA_SEARCH_GIGS } from "../action/types";
const initialState = {
  searchGigs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SEARCH_GIGS:
      return {
        ...state,
        searchGigs: action.payload
      };
    default:
      return state;
  }
};
