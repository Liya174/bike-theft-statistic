import React from "react";
import { Link, Redirect } from "react-router-dom";

import s from "./AuthorizedMenu.module.css";

const AuthorizedMenu = (props) => {
  return (
    <div className={s.menu}>
      <Link to="/theft-message" className={`${s.link} button`}>
        Новый случай
      </Link>
      <Link to="/stolen-bikes" className={`${s.link} button`}>
        Украденные велосипеды
      </Link>
      <Link to="/workers" className={`${s.link} button`}>
        Ответственные сотрудники
      </Link>
    </div>
  );
};

export default AuthorizedMenu;
