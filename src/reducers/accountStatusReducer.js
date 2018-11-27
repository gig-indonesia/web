import { FETCH_DATA_ACCOUNT } from "../action/types";
const initialState = {
  account: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_ACCOUNT:
      return {
        ...state,
        account: action.payload
      };
    default:
      return state;
  }
};
