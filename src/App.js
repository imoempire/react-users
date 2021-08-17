import React, { Component } from "react";
import UseForm from "./Components/UseForm";
import UserList from "./Components/UserList";
import "./App.css";

class App extends Component {
<<<<<<< HEAD
=======
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'John',
          email: 'john@gmail.com',
          age: '20' }
      ],
    };
  }
>>>>>>> 3013a09dc714b346b21345a31c1765eba454fdda
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
