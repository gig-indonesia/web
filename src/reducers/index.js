import { combineReducers } from "redux";
import newArtistsReducer from "./newArtistsReducer";
import newGigsReducer from "./newGigsReducer";
import searchArtistsReducer from "./searchArtistsReducer";
import searchGigsReducer from "./searchGigsReducer";
// import newNotifications from "./newNotificationsReducer";
import newNotificationsReducer from "./newNotificationsReducer";
import accountStatusReducer from "./accountStatusReducer";
import isAuthReducer from "./isAuthReducer";

const rootReducers = combineReducers({
  newArtists: newArtistsReducer,
  newGigs: newGigsReducer,
  searchArtists: searchArtistsReducer,
  searchGigs: searchGigsReducer,
  newNotifications: newNotificationsReducer,
  accountStatus: accountStatusReducer,
  isAuth: isAuthReducer
});

export default rootReducers;
