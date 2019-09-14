import {combineReducers} from "redux";
import {globalsReducer} from "./globals.reducer";

export default combineReducers({
  globals: globalsReducer,
})