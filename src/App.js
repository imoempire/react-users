import React, { Component } from 'react';
import UseForm from './Components/UseForm';
import User from './Components/User';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'James',
          email: 'James@gmail.com',
          gen: 2
        },
        {
          name: 'John',
          email: 'John@gmail.com',
          gen: 12
        },
        {
          name: 'Grace',
          email: 'Grace@gmail.com',
          gen: 34
        },
      ]
    }
  }
  handleAddUser = (newUser) => { 
    this.setState({
      users: [...this.state.users, newUser]
    })
  };
  render() {
    const users = this.state.users.map((user, index) => {
      return (
        <User user={user} index={index} />
      )
    })
    return (
      <>
        <h1>ADD A  User</h1>
        <UseForm addUser={this.handleAddUser} />
        {users}
      </>
    );
  }
}

export default App;
