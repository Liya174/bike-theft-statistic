import React from "react";
import s from "./Header.module.css";
import "../../App.css";
import logo from "../../img/logo.svg";
import { Link, Redirect } from "react-router-dom";

const Header = ({ auth, signOut }) => {
  const { isAuth } = auth;

  const onExitButtonClicked = () => {
    signOut();
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerContainer}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className={s.buttons}>
            {!isAuth && (
              <>
                <Link to="/sign-in">
                  <button className="button">Войти</button>
                </Link>
                <Link to="/registration">
                  <button className="button">Зарегистрироваться</button>
                </Link>
              </>
            )}
            {isAuth && (
              <>
                <button className="button">Обо мне</button>
                <button className="button" onClick={onExitButtonClicked}>
                  Выйти
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
