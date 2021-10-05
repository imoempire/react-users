import React from 'react';
import { useDispatch } from 'react-redux';
import {registerUserWithEmail} from '../actions/authActions';
import {Link } from 'react-router-dom'

function Register() {
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();

        let email =e.target.elements.email.value;
        let password = e.target.elements.password.value;

        dispatch(registerUserWithEmail(email, password));
    }

    return (
        <div>
        <form onSubmit={handleSubmit} style={{background: 'white'}}>
        <label style={{color: 'white'}}>Email</label>
        <input name="email" type="email" />
        <label style={{color: 'white'}}>Password</label>
        <input name="password" type="password" />
        <hr />
        <Link to="/login">Already have an account? Sign in</Link>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
        </div>
    )
}

export default Register;
