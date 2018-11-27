import { combineReducers } from "redux";
import newArtistsReducer from "./newArtistsReducer";
import newGigsReducer from "./newGigsReducer";
import searchArtistsReducer from "./searchArtistsReducer";
import searchGigsReducer from "./searchGigsReducer";
import newNotifications from "./newNotificationsReducer";
import newNotificationsReducer from "./newNotificationsReducer";

const rootReducers = combineReducers({
  newArtists: newArtistsReducer,
  newGigs: newGigsReducer,
  searchArtists: searchArtistsReducer,
  searchGigs: searchGigsReducer,
  newNotifications: newNotificationsReducer
});

export default rootReducers;
