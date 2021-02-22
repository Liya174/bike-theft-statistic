import React from "react";
import s from "./Header.module.css";
import "../../App.css";
import logo from "../../img/logo.svg";
import { NavLink, Redirect } from "react-router-dom";

const Header = ({ auth, signOut }) => {
  const { isAuth } = auth;

  const onExitButtonClicked = () => {
    signOut();
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerContainer}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          {isAuth && (
            <div className={s.breadcrumbs}>
              <NavLink
                to="/theft-message"
                className={s.link}
                activeClassName={s.active}
              >
                Новый случай
              </NavLink>
              <NavLink
                to="/stolen-bikes"
                className={s.link}
                activeClassName={s.active}
              >
                Украденные велосипеды
              </NavLink>
              <NavLink
                to="/officers"
                className={s.link}
                activeClassName={s.active}
              >
                Ответственные сотрудники
              </NavLink>
            </div>
          )}

          <div className={s.buttons}>
            {!isAuth && (
              <>
                <NavLink to="/sign-in">
                  <button className="button">Войти</button>
                </NavLink>
                <NavLink to="/registration">
                  <button className="button">Зарегистрироваться</button>
                </NavLink>
              </>
            )}
            {isAuth && (
              <button className="button" onClick={onExitButtonClicked}>
                Выйти
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
