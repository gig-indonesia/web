import { FETCH_DATA_NEW_GIGS } from "./types";
import axios from "axios";

export const fetchDataGigs = () => dispatch => {
  axios
    .get("https://gig-id.herokuapp.com/gigs")
    .then(res =>
      dispatch({
        type: FETCH_DATA_NEW_GIGS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
