import React, { Component } from "react";
import UseForm from "./Components/UseForm";
import UserList from "./Components/UserList";
import "./App.css";

class App extends Component {


  handleAddUser = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      users: [newUser, ...this.state.users],
    });
  };
    handleDelete =(userId)=>{
   const keptUsers =this.state.users.filter((user) => {
     return user.id !== userId;
   });
   this.setState({ users: keptUsers });
  };

  handleEdit=(updatedUser)=>{
    this.setState({
      users: this.state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    });
  };
  render() {
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
}

export default App;
