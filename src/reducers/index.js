import { combineReducers } from "redux";
import newArtistsReducer from "./newArtistsReducer";
import newGigsReducer from "./newGigsReducer";
import searchArtistsReducer from "./searchArtistsReducer";
import searchGigsReducer from "./searchGigsReducer";
import accountStatusReducer from "./accountStatusReducer";

const rootReducers = combineReducers({
  newArtists: newArtistsReducer,
  newGigs: newGigsReducer,
  searchArtists: searchArtistsReducer,
  searchGigs: searchGigsReducer,
  accountStatus: accountStatusReducer
});

export default rootReducers;
