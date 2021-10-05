import React, { Component } from "react";
import UseForm from "./Components/UseForm";
import UserList from "./Components/UserList";
import { useDispatch } from "react-redux";
import "./App.css";
import { logout } from "./actions/authActions";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const App =()=> {
  const{ replace } = useHistory()
  const dispatch = useDispatch();

    return (
      <>
        <h1>ADD A User</h1>
        <button onClick={()=>dispatch(logout(replace))}>Logout</button>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <UseForm  />
            </div>
            <div className="col-9">
              <UserList/>
              </div>
              </div>
        </div>
      </>
    );
}

const mapSTateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapSTateToProps)(App);
