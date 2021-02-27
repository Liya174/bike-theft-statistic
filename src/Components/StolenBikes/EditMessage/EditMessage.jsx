import React, { useState } from "react";
import s from "../../Officers/Officers.module.css";
import style from "../StolenBikes.module.css";
import close from "../../../img/close.svg";
import edit from "../../../img/edit.svg";
import {
  typeFormatterToEng,
  statusFormatterToEng,
  statusFormatterToRus,
  TYPES,
  STATUSES,
} from "../../../utils/formatters/formatters";

const EditMessage = ({
  formattedThefts,
  officers,
  selectedMessageId,
  closeEditMessage,
  editMessage,
  // selectedOfficerId,
  // closeEditOfficer,
  // editOfficer,
}) => {
  const currentMessage = formattedThefts.find(
    (theft) => theft._id === selectedMessageId
  );

  // изменение значений
  const [editParam, setEditParam] = useState("");
  const [editParamValue, setEditParamValue] = useState("");
  const handleChange = (e) => {
    setEditParamValue(e.target.value);
  };
  const handleEditClick = (param) => {
    setEditParam(param);
    setEditParamValue(currentMessage[param]);
  };
  const saveNewValue = (param) => {
    if (editParamValue.trim() && editParamValue !== currentMessage[param]) {
      let value;
      console.log(editParamValue.split(" ")[0]);
      console.log(editParamValue.split(" ")[1]);
      console.log(officers);
      if (param === "officer") {
        value = officers.find(
          (officer) =>
            officer.firstName === editParamValue.split(" ")[0] &&
            officer.lastName === editParamValue.split(" ")[1]
        )._id;
        console.log(value);
      } else value = editParamValue;
      const editingValue = { [editParam]: value };
      editMessage(currentMessage._id, editingValue);
    }
    setEditParam("");
    setEditParamValue("");
  };

  return (
    <div className={s.modalBackground}>
      <div className={s.modalContainer}>
        <h1 className={s.title}>Информация о краже</h1>
        <div className={s.infoModule}>
          {/* ------------ДАТЫ---------------------- */}
          <div className={s.string}>
            <span className={s.stringTitle}>Дата создания:&nbsp;</span>
            <span className={s.spanInterval}>{currentMessage.createdAt}</span>
            <span className={s.stringTitle}>Дата изменения:&nbsp;</span>
            <span className={s.spanInterval}>{currentMessage.updateAt}</span>
          </div>
          {/* ------------АРЕНДАТОР---------------------- */}
          <div className={s.string}>
            <span className={s.stringTitle}>Данные владельца:&nbsp;</span>
            {editParam === "ownerFullName" ? (
              <>
                <input
                  className={s.input}
                  type="text"
                  name="ownerFullName"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("ownerFullName")}
                />
              </>
            ) : (
              <>
                <span>{currentMessage.ownerFullName}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("ownerFullName")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          {/* ------------ОТВЕТСТВЕННЫЙ СОТРУДНИК---------------------- */}
          <div className={s.string}>
            <span className={s.stringTitle}>
              Ответственный сотрудник:&nbsp;
            </span>
            {editParam === "officer" ? (
              <select
                className={s.select}
                defaultValue={editParamValue}
                onChange={handleChange}
                onBlur={() => saveNewValue("officer")}
              >
                {officers.map((officer, index) => {
                  console.log(officer);
                  return (
                    <option key={index} className={s.option}>
                      {officer.firstName} {officer.lastName}
                    </option>
                  );
                })}
              </select>
            ) : (
              <>
                <span>{currentMessage.officer}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("officer")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          {/* ------------НОМЕР ЛИЦЕНЗИИ---------------------- */}
          <div className={s.string}>
            <span className={s.stringTitle}>Номер лицензии:&nbsp;</span>
            {editParam === "licenseNumber" ? (
              <>
                <input
                  className={s.input}
                  type="text"
                  name="licenseNumber"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("licenseNumber")}
                />
              </>
            ) : (
              <>
                <span>{currentMessage.licenseNumber}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("licenseNumber")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          {/* ------------ЦВЕТ---------------------- */}
          <div className={s.string}>
            <span className={s.stringTitle}>Цвет:&nbsp;</span>
            {editParam === "color" ? (
              <>
                <input
                  className={style.color}
                  type="color"
                  name="color"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("color")}
                />
              </>
            ) : (
              <>
                <div
                  style={{ backgroundColor: currentMessage.color }}
                  className={style.color}
                />
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("color")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
            {/* ------------ТИП---------------------- */}
            <span className={s.stringTitle}>Тип:&nbsp;</span>
            {editParam === "type" ? (
              <select
                className={s.select}
                defaultValue={editParamValue}
                onChange={(e) =>
                  setEditParamValue(typeFormatterToEng(e.target.value))
                }
                onBlur={() => saveNewValue("type")}
              >
                {TYPES.map((type, index) => {
                  return (
                    <option key={index} className={s.option}>
                      {type.rus}
                    </option>
                  );
                })}
              </select>
            ) : (
              <>
                <span>{currentMessage.type}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("type")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          {/* ------------ОПИСАНИЕ---------------------- */}
          <div className={s.string}>
            <span className={s.stringTitle}>Описание:&nbsp;</span>
            {editParam === "description" ? (
              <>
                <textarea
                  className="textarea"
                  name="description"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("description")}
                />
              </>
            ) : (
              <>
                <span className={s.longText}>{currentMessage.description}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("description")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          {/* ------------СТАТУС---------------------- */}
          <div className={s.string}>
            <span className={s.stringTitle}>Статус:&nbsp;</span>
            {editParam === "status" ? (
              <>
                <select
                  className={s.select}
                  defaultValue={statusFormatterToRus(editParamValue)}
                  onChange={(e) =>
                    setEditParamValue(statusFormatterToEng(e.target.value))
                  }
                  onBlur={() => {
                    if (editParamValue === "done") {
                      handleEditClick("resolution");
                    } else {
                      saveNewValue("status");
                    }
                  }}
                >
                  {STATUSES.map((status, index) => {
                    return (
                      <option key={index} className={s.option}>
                        {status.rus}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : (
              <>
                <span>{statusFormatterToRus(currentMessage.status)}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("status")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          {/* ------------РЕШЕНИЕ---------------------- */}
          {currentMessage.status === "done" ? (
            <div className={s.string}>
              <span className={s.stringTitle}>Решение:&nbsp;</span>
              {editParam === "resolution" ? (
                <>
                  <textarea
                    className="textarea"
                    name="resolution"
                    autoFocus={true}
                    required={true}
                    value={editParamValue}
                    onChange={handleChange}
                    onBlur={() => saveNewValue("resolution")}
                  />
                </>
              ) : (
                <>
                  <span className={s.longText}>
                    {currentMessage.resolution}
                  </span>
                  <button
                    className={s.editButton}
                    onClick={() => handleEditClick("resolution")}
                  >
                    <img src={edit} alt="edit" />
                  </button>
                </>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <button className={s.close} onClick={closeEditMessage}>
          <img src={close} className={s.closeImage} alt="Х" />
        </button>
      </div>
    </div>
  );
};

export default EditMessage;
