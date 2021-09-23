import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { addUser, getAllUsers } from '../actions/UsersActions'
import { connect } from 'react-redux';

class UseForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            gen: ''
           
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewUser(this.state);
        this.setState({
            name: "",
            email: "",
            gen: ""
        })
    };

    componentDidMount(){
        this.props.getAllUsers()
    }

    render() {
        return (
            <>
                 <Form onSubmit={this.handleSubmit} style={{color: 'white'}}>
                <Form.Group controlId="formBasicName">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control className="input"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control className="input"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                    <Form.Label htmlFor="gen">Gen</Form.Label>
                    <Form.Control className="input"
                        type="number"
                        name="gen"
                        value={this.state.gen}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                    <Button variant="primary" type="submit">Add user</Button>
            </Form>
            </>
        );
    }
}

const mapDispatchToProps = {
    addNewUser: addUser,
    getAllUsers: getAllUsers
}

export default connect(null, mapDispatchToProps)(UseForm);
