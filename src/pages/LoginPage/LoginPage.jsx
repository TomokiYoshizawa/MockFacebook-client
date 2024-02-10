import React from "react";

import "./LoginPage.scss";
function LoginPage() {
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
          <div className="login__box">
            <input type="text" className="login__input" placeholder="E-mail" />
            <input
              type="text"
              className="login__input"
              placeholder="Password"
            />
            <button className="login__btn">Login</button>
            <span className="login__forget">Forget your password?</span>
            <button className="login__btn login__btn-register">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
