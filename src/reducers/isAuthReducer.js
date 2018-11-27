import { IS_AUTH, LOGOUT } from "../action/types";
const initialState = {
  isAuth: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    case LOGOUT:
    return {
      ...state,
      isAuth: action.payload
    }
    default:
      return state;
  }
};
