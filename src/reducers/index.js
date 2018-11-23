import { combineReducers } from "redux";
import newArtistsReducer from "./newArtistsReducer";
import newGigsReducer from "./newGigsReducer";

const rootReducers = combineReducers({
  newArtists: newArtistsReducer,
  newGigs: newGigsReducer
});

export default rootReducers;
