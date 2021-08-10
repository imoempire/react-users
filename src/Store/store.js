import { createStore } from "redux";
import UsersReducer from "../Reducers/UsersReducer";

const store=createStore(UsersReducer)

export default store;