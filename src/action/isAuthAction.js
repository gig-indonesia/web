import { IS_AUTH, LOGOUT } from "./types";
import axios from "axios";

export const isAuth = e => ({
  type: IS_AUTH,
  payload: true
});

export const logout = e => ({
  type: LOGOUT,
  payload: false
})