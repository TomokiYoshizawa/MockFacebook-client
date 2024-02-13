/* eslint-disable no-unused-vars */

import { React, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./RegisterPage.scss";
import axios from "axios";

function RegisterPage() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();

  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    //confirm password matching
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      try {
        //register user if password matches
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post(`${SERVER_URL}/auth/register`, user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__left">
          <h3 className="register__title">Mock Facebook</h3>
          <span className="register__description">
            You can start new Social Media here
          </span>
        </div>
        <div className="register__right">
          <form className="register__box" onSubmit={handleSubmit}>
            <h4 className="register__description register__description-register">
              Register Here
            </h4>
            <input
              type="text"
              className="register__input"
              placeholder="User name"
              required
              ref={username}
            />
            <input
              type="email"
              className="register__input"
              placeholder="E-mail"
              required
              ref={email}
            />
            <input
              type="text"
              className="register__input"
              placeholder="Password"
              minLength="6"
              required
              ref={password}
            />
            <input
              type="text"
              className="register__input"
              placeholder="Confirmed Password"
              minLength="6"
              required
              ref={passwordAgain}
            />
            <button type="submit" className="register__btn">
              Sign Up
            </button>
            <Link to="/login" className="register__link">
              <button className="register__btn register__btn-register">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
