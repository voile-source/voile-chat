  import { CombinedState, combineReducers } from "redux";
  import userReducer from "./user";

  const allReducer = {
    user: userReducer,
  };

  const rootReducer = combineReducers(allReducer);

  export default rootReducer;
