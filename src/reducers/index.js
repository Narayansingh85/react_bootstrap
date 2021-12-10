import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
export const allReducers = combineReducers({
    login:LoginReducer
})