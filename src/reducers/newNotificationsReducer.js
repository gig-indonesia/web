import { FETCH_NOTIFICATIONS } from "../action/types";
import axios from "axios";

const initialState = {
  newNotifications: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        newNotifications: action.payload
      };
    default:
      return state;
  }
};
