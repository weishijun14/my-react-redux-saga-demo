import { combineReducers } from "redux";
import { initialState } from "./index";

function reducer1(state = { ...initialState }, action) {
  switch (action.type) {
    case "h1clicks":
      return { ...state, text1: action.payload };
    case "congra":
      return { ...state, text1: "congra" };
    case "gotData":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

function reducer2(state = { ...initialState }, action) {
  switch (action.type) {
    case "h2click":
      return { ...state, text2: action.payload };
    default:
      return { ...state };
  }
}

export default combineReducers({ reducer1, reducer2 });
