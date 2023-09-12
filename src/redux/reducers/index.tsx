import { combineReducers } from "redux";
import cafeReducer from "./cafeReducer";

export default combineReducers({
  cafes: cafeReducer,
});
