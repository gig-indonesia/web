import { combineReducers } from "redux";
import newArtistsReducer from "./newArtistsReducer";

const rootReducers = combineReducers({
  newArtists: newArtistsReducer
});

export default rootReducers;
