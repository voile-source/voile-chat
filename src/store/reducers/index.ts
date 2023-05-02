import { CombinedState, combineReducers } from "redux";
import userReducer from "./user";

const allReducer = {
  UserReducer: userReducer,
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;
