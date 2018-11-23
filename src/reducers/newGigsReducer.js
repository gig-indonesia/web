import { FETCH_DATA_NEW_GIGS } from "../action/types";
const initialState = {
  newGigs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_NEW_GIGS:
      return {
        ...state,
        newGigs: action.payload
      };
    default:
      return state;
  }
};
