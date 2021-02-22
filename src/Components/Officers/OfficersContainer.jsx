import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Officers from "./Officers.jsx";
import {
  getOfficersList,
  editOfficer,
  deleteOfficer,
  addNewOfficer,
} from "../../redux/officers-reducer.js";
import { compose } from "redux";
import { Redirect, withRouter } from "react-router";

const OfficersContainer = ({
  isAuth,
  officers,
  getOfficersList,
  editOfficer,
  deleteOfficer,
  addNewOfficer,
}) => {
  if (!isAuth) {
    return <Redirect to={"/"} />;
  }

  useEffect(() => {
    getOfficersList();
  }, []);

  //для добавления нового сотрудника
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const onAddOfficerSubmit = (officerData) => {
    closeAddModal();
    addNewOfficer(officerData);
  };

  //для редактирвоания выбранного сотрудника
  const [selectedOfficerId, setSelectedOfficerId] = useState(null);
  const openEditOfficer = (id) => setSelectedOfficerId(id);
  const closeEditOfficer = (id) => setSelectedOfficerId(null);

  return (
    <Officers
      officers={officers}
      isAddModalOpen={isAddModalOpen}
      selectedOfficerId={selectedOfficerId}
      editOfficer={editOfficer}
      deleteOfficer={deleteOfficer}
      onAddOfficerSubmit={onAddOfficerSubmit}
      openAddModal={openAddModal}
      closeAddModal={closeAddModal}
      openEditOfficer={openEditOfficer}
      closeEditOfficer={closeEditOfficer}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    officers: state.officers.officers,
  };
};

export default compose(
  connect(mapStateToProps, {
    getOfficersList,
    editOfficer,
    deleteOfficer,
    addNewOfficer,
  }),
  withRouter
)(OfficersContainer);
