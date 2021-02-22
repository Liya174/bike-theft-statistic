import React from "react";
import s from "../Officers.module.css";
import close from "../../../img/close.svg";
import UserCreateForm from "../../UserCreate/UserCreateForm.jsx";

const ModalAddOfficer = ({ closeAddModal, onAddOfficerSubmit }) => {
  return (
    <div className={s.modalBackground}>
      <div className={s.modalContainer}>
        <UserCreateForm
          onSubmit={onAddOfficerSubmit}
          buttonName="Добавить сотрудника"
        />
        <button className={s.close} onClick={closeAddModal}>
          <img src={close} className={s.closeImage} alt="Х" />
        </button>
      </div>
    </div>
  );
};

export default ModalAddOfficer;
