import { FETCH_DATA_NEW_ARTISTS } from "./types";
import axios from "axios";

export const fetchDataArtists = () => dispatch => {
  axios
    .get("https://gig-id.herokuapp.com/artist")
    .then(res =>
      dispatch({
        type: FETCH_DATA_NEW_ARTISTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_DATA_NEW_ARTISTS,
        payload: []
      })
    );
};
