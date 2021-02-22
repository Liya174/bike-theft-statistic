import React from "react";
import { Link } from "react-router-dom";
import s from "./Officers.module.css";

const Officer = ({ officer, editOfficer, deleteOfficer, openEditOfficer }) => {
  return (
    <div className={s.officer}>
      <button
        to={`/officers/${officer._id}`}
        className={s.name}
        onClick={() => openEditOfficer(officer._id)}
      >
        {officer.firstName} {officer.lastName}
        {officer.approved ? <> &#10003;</> : ""}
      </button>
      <div className={s.buttons}>
        <button
          className={s.button}
          onClick={() => editOfficer(officer._id, { approved: true })}
          disabled={officer.approved}
        >
          Одобрить
        </button>
        <button className={s.button} onClick={() => deleteOfficer(officer._id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Officer;
