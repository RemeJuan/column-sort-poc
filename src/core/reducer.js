/* eslint-disable no-param-reassign */

import { combineReducers } from "redux";

import pageReducer from "../page/reducer";

const appReducer = combineReducers({
  pageReducer
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APPLICATION") {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
