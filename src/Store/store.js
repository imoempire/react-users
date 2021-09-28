import { applyMiddleware, compose, createStore } from "redux";
import UsersReducer from "../Reducers/UsersReducer";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from 'redux-thunk';
import firebase from "../firebase/config";
import { firestore } from "firebase";


const store=createStore(UsersReducer, compose (
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
));

export default store;
