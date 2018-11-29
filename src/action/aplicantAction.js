import { FETCH_DATA_APPLICANTS } from "./types";
import axios from "axios";

export const searchArtists = e => dispatch => {
  axios
    .get(`http://localhost:5000/apply`)
    .then(res => {
      console.log("search artists");
      dispatch({
        type: FETCH_DATA_APPLICANTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
