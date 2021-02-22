import React from "react";
import { Redirect } from "react-router";
import Officer from "./Officer.jsx";
import ModalAddOfficer from "./Add/ModalAddOfficer.jsx";
import EditOfficer from "./Edit/EditOfficer.jsx";

import s from "./Officers.module.css";

const Officers = ({
  officers,
  editOfficer,
  deleteOfficer,
  isAddModalOpen,
  openAddModal,
  closeAddModal,
  onAddOfficerSubmit,
  selectedOfficerId,
  openEditOfficer,
  closeEditOfficer,
}) => {
  return (
    <>
      <h1 className={s.title}>Сотрудники</h1>
      <button className={`${s.addButton} button`} onClick={openAddModal}>
        Добавить сотрудника
      </button>
      <div className={s.officers}>
        {officers.map((officer) => (
          <Officer
            key={officer._id}
            officer={officer}
            editOfficer={editOfficer}
            deleteOfficer={deleteOfficer}
            openEditOfficer={openEditOfficer}
          />
        ))}
      </div>
      {isAddModalOpen && (
        <ModalAddOfficer
          closeAddModal={closeAddModal}
          onAddOfficerSubmit={onAddOfficerSubmit}
        />
      )}
      {selectedOfficerId && (
        <EditOfficer
          officers={officers}
          selectedOfficerId={selectedOfficerId}
          editOfficer={editOfficer}
          closeEditOfficer={closeEditOfficer}
        />
      )}
    </>
  );
};

export default Officers;
