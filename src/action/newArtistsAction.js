import { FETCH_DATA_NEW_ARTISTS } from "./types";
import axios from "axios";

export const fetchDataArtists = () => dispatch => {
  axios
    .get("https://api-gig.herokuapp.com/artist")
    .then(res =>
      dispatch({
        type: FETCH_DATA_NEW_ARTISTS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
