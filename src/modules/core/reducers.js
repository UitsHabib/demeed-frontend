import { combineReducers } from "redux";
import { userReducer, serviceReducer } from "../platform";

export default combineReducers({
    userReducer, 
    serviceReducer,
});
