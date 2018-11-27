import { FETCH_DATA_SEARCH_GIGS } from "./types";
import axios from "axios";

export const searchGigs = query => dispatch => {
  axios
    .get(`https://gig-id.herokuapp.com/gigs?name=${query}`)
    .then(res => {
      console.log("search gigs");
      dispatch({
        type: FETCH_DATA_SEARCH_GIGS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
