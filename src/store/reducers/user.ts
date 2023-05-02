import { actionTypes } from "../actions/user";

const initialState = {
  user: {},
  isLogin: false,
};

export default function UserReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}
