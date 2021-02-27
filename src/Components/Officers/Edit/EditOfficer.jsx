import React, { useState } from "react";
import s from "../Officers.module.css";
import close from "../../../img/close.svg";
import edit from "../../../img/edit.svg";

const EditOfficer = ({
  officers,
  selectedOfficerId,
  closeEditOfficer,
  editOfficer,
}) => {
  const currentOfficer = officers.find(
    (officer) => officer._id === selectedOfficerId
  );
  //изменение значений (кроме пароля)
  const [editParam, setEditParam] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setEditParamValue(e.target.value);
  };
  const handleEditClick = (param) => {
    setEditParam(param);
    setEditParamValue(currentOfficer[param]);
  };
  const saveNewValue = (param) => {
    if (editParamValue.trim() && editParamValue !== currentOfficer[param]) {
      const editingValue = { [editParam]: editParamValue };
      editOfficer(currentOfficer._id, editingValue);
    }
    setEditParam("");
    setEditParamValue("");
  };

  //изменение пароля
  const [repassword, setRepassword] = useState("");
  const [editParamValue, setEditParamValue] = useState("");
  const handlePasswordChange = (e, type) => {
    type === "password" && setPassword(e.target.value);
    type === "repassword" && setRepassword(e.target.value);
  };

  const saveNewPassword = () => {
    if (password && password === repassword) {
      editOfficer(currentOfficer._id, { password, repassword });
      setEditParam("");
      setEditParamValue("");
      alert("Пароль изменён");
    } else {
      alert("Введённые пароли не совпадают");
    }
  };

  return (
    <div className={s.modalBackground}>
      <div className={s.modalContainer}>
        <h1 className={s.title}>Информация о сотруднике</h1>
        <div className={s.infoModule}>
          <div className={s.string}>
            <span className={s.stringTitle}>Имя:&nbsp;</span>
            {editParam === "firstName" ? (
              <>
                <input
                  className={s.input}
                  type="text"
                  name="firstName"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("firstName")}
                />
              </>
            ) : (
              <>
                <span>{currentOfficer.firstName}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("firstName")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          <div className={s.string}>
            <span className={s.stringTitle}>Фамилия:&nbsp;</span>
            {editParam === "lastName" ? (
              <>
                <input
                  className={s.input}
                  type="text"
                  name="lastName"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("lastName")}
                />
              </>
            ) : (
              <>
                <span>{currentOfficer.lastName}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("lastName")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>
          <div className={s.string}>
            <span className={s.stringTitle}>Email:&nbsp;</span>
            {editParam === "email" ? (
              <>
                <input
                  className={s.input}
                  type="email"
                  name="email"
                  autoFocus={true}
                  value={editParamValue}
                  onChange={handleChange}
                  onBlur={() => saveNewValue("email")}
                />
              </>
            ) : (
              <>
                <span>{currentOfficer.email}</span>
                <button
                  className={s.editButton}
                  onClick={() => handleEditClick("email")}
                >
                  <img src={edit} alt="edit" />
                </button>
              </>
            )}
          </div>

          {editParam === "password" ? (
            <>
              <div className={s.string}>
                <span className={s.stringTitle}>Новый пароль: </span>
                <input
                  className={s.input}
                  type="password"
                  name="password"
                  autoFocus={true}
                  value={password}
                  onChange={(e) => handlePasswordChange(e, "password")}
                />
              </div>
              <div className={s.string}>
                <span className={s.stringTitle}>Повторите пароль: </span>
                <input
                  className={s.input}
                  type="password"
                  name="repassword"
                  autoFocus={true}
                  value={repassword}
                  onChange={(e) => handlePasswordChange(e, "repassword")}
                />
              </div>
              <button className={s.button} onClick={saveNewPassword}>
                Сохранить пароль
              </button>
            </>
          ) : (
            <button
              className={s.button}
              onClick={() => setEditParam("password")}
            >
              Изменить пароль
            </button>
          )}
        </div>
        <button className={s.close} onClick={closeEditOfficer}>
          <img src={close} className={s.closeImage} alt="Х" />
        </button>
      </div>
    </div>
  );
};

export default EditOfficer;
