import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import UsersReducer from "../Reducers/UsersReducer";
import { firebaseReducer, getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from 'redux-thunk';
import firebase from "../firebase/config";
import authReducer from '../Reducers/authReducer'


let reducers= combineReducers({
    user: UsersReducer,
    firebase: firebaseReducer,
    auth: authReducer,
})

const store=createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
));

export default store;
