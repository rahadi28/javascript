import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../api/register.js";

function Registration(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
      };
      axios
        .post(API_BASE_URL + "register", payload)
        .then(function (response) {
          if (response.data.code === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            redirectToHome();
            props.showError(null);
          } else {
            props.showError("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };

  const redirectToHome = () => {
    props.updateTitle("Home");
    props.history.push("/home");
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input
            className="form-control"
            type="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            value={state.email}
            onChange={handleChange}
          />
          <small className="form-text text-muted" id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default withRouter(Registration);
