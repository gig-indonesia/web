import { combineReducers } from "redux";
import newArtistsReducer from "./newArtistsReducer";
import newGigsReducer from "./newGigsReducer";
import searchArtistsReducer from "./searchArtistsReducer";
import searchGigsReducer from "./searchGigsReducer";

const rootReducers = combineReducers({
  newArtists: newArtistsReducer,
  newGigs: newGigsReducer,
  searchArtists: searchArtistsReducer,
  searchGigs: searchGigsReducer
});

export default rootReducers;
