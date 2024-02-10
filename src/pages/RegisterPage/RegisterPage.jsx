import React from "react";

import "./RegisterPage.scss";

function RegisterPage() {
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
          <div className="register__box">
            <h4 className="register__description register__description-register">
              Register Here
            </h4>
            <input
              type="text"
              className="register__input"
              placeholder="User name"
            />
            <input
              type="text"
              className="register__input"
              placeholder="E-mail"
            />{" "}
            <input
              type="text"
              className="register__input"
              placeholder="Password"
            />
            <input
              type="text"
              className="register__input"
              placeholder="Confirmed Password"
            />
            <button className="register__btn">Sign Up</button>
            <button className="register__btn register__btn-register">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
