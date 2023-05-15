import { actionTypes } from "../actions/user";

const initialState = {
  userInfo: {},
  isLogin: false,
  currentChat: {},
};

export default function UserReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      state = JSON.parse(JSON.stringify(state));
      state.userInfo = action.payload;
      state.isLogin = true;
      return state;
    }
    case actionTypes.OPEN_CHAT: {
      state = JSON.parse(JSON.stringify(state));
      state.currentChat = action.payload;
      return state;
    }
    default:
      return state;
  }
}
