import { FETCH_DATA_NEW_GIGS } from "./types";
import axios from "axios";

export const fetchDataGigs = () => dispatch => {
  axios
    .get("http://api-gig.herokuapp.com/creategig")
    .then(res =>
      dispatch({
        type: FETCH_DATA_NEW_GIGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_DATA_NEW_GIGS,
        payload: []
      })
    );
};
