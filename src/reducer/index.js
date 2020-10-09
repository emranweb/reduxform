import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import fetchUsersReducers from "./fetchUsersReducers";


export default combineReducers({
  fetch: fetchUsersReducers,
  form: formReducer,
});
