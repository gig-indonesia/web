import { FETCH_DATA_SEARCH_ARTISTS } from "./types";
import axios from "axios";

export const searchArtists = query => dispatch => {
  axios
    .get(`https://api-gig.herokuapp.com/artist?name=${query}`)
    .then(res => {
      console.log("search artists");
      dispatch({
        type: FETCH_DATA_SEARCH_ARTISTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: FETCH_DATA_SEARCH_ARTISTS,
        payload: []
      })
    );
};
