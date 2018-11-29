import { FETCH_DATA_ACCOUNT } from "./types";
import axios from "axios";

export const fetchAccount = () => dispatch => {
  axios
    .get("https://gig-id.herokuapp.com/artist")
    .then(res =>
      dispatch({
        type: FETCH_DATA_ACCOUNT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
