import { FETCH_DATA_ACCOUNT } from "./types";
import axios from "axios";

export const fetchAccount = () => dispatch => {
  axios
    .get("http://localhost:5000/artist")
    .then(res =>
      dispatch({
        type: FETCH_DATA_ACCOUNT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
