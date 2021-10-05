import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { loginWIthEmail} from "../actions/authActions";

function Login(props) {
  const dispatch = useDispatch();
  const { replace } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(loginWIthEmail(email, password, replace));
  };

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{color: 'white'}}>Email</label>
        <input name="email" type="email" />
        <label style={{color: 'white'}}>Password</label>
        <input name="password" type="password" />
        <hr />
        <button type="submit" className="btn-primary">
          Submit
        </button>

        <Link to="/">Don't have an account? Sign up</Link>

      </form>
    </div>
  );
}

const mapSTateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });
  
  export default connect(mapSTateToProps)(Login);