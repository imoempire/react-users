import React, { Component } from "react";
import UseForm from "./Components/UseForm";
import UserList from "./Components/UserList";
import "./App.css";

const App =()=> {
    return (
      <>
        <h1>ADD A User</h1>
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

export default App;
