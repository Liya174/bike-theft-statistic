import React from "react";
import {
  STATUSES,
  statusFormatterToEng,
  statusFormatterToRus,
} from "../../utils/formatters/formatters";
import deleteBtn from "../../img/delete.svg";
import s from "./StolenBikes.module.css";

export const Colors = ({ value }) => {
  return <div style={{ backgroundColor: value }} className={s.color} />;
};

export const Delete = ({ value, deleteMessage }) => {
  const onDeleteBtnClicked = (id) => {
    deleteMessage(id);
  };
  return (
    <button className={s.deleteBtn} onClick={() => onDeleteBtnClicked(value)}>
      <img src={deleteBtn} alt="del" />
    </button>
  );
};

export const Status = ({ value, id, editMessage, openResolution }) => {
  const onStatusChanged = (e, id) => {
    const selectedStatus = statusFormatterToEng(e.target.value);
    if (selectedStatus === "done") {
      openResolution(id);
    } else {
      editMessage(id, { status: selectedStatus });
    }
  };

  return (
    <select
      className={s.select}
      value={statusFormatterToRus(value)}
      onChange={(e) => onStatusChanged(e, id)}
    >
      {STATUSES.map((status, index) => {
        return (
          <option key={index} className={s.option}>
            {status.rus}
          </option>
        );
      })}
    </select>
  );
};

export const Owner = ({ value, id, openEditMessage }) => {
  const onOwnerButtonClicked = (id) => openEditMessage(id);

  return (
    <button className={s.ownerButton} onClick={() => onOwnerButtonClicked(id)}>
      {value}*
    </button>
  );
};
