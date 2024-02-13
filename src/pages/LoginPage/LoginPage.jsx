/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../state/AuthContext";
import { loginCall } from "../../Dispatch";

import "./LoginPage.scss";

function LoginPage() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h3 className="login__title">Mock Facebook</h3>
          <span className="login__description">
            You can start new Social Media here
          </span>
        </div>
        <div className="login__right">
          <form onSubmit={handleSubmit} className="login__box">
            <input
              type="email"
              className="login__input"
              placeholder="E-mail"
              required
              ref={email}
            />
            <input
              type="password"
              className="login__input"
              placeholder="Password"
              required
              minLength={6}
              ref={password}
            />
            <button className="login__btn">Login</button>
            <span className="login__forget">Forget your password?</span>
            <button className="login__btn login__btn-register">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
