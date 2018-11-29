import { FETCH_DATA_SEARCH_GIGS } from "./types";
import axios from "axios";

export const searchGigs = query => dispatch => {
  axios
    .get(`http://localhost:5000/gigs?name=${query}`)
    .then(res => {
      console.log("search gigs");
      dispatch({
        type: FETCH_DATA_SEARCH_GIGS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
