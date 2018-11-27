import { IS_AUTH } from "./types";
import axios from "axios";

export const isAuth = e => ({
  type: IS_AUTH,
  payload: true
});
