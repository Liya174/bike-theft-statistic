import { Link } from "react-router-dom";
import React from "react";
import s from "./Main.module.css";

const Main = (props) => {
  return (
    <>
      <p className={s.text}>
        Если у Вас украли велосипед из нашего проката, сообщите нам об этом!
      </p>
      <Link to="/theft-message" className={`${s.link} button`}>
        Сообщить о краже
      </Link>
    </>
  );
};

export default Main;
