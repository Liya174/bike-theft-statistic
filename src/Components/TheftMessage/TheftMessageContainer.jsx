import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOfficersList } from "../../redux/officers-reducer.js";
import {
  addNewMessage,
  addNewUnauthorizedMessage,
} from "../../redux/theft-message-reducer.js";
import TheftMessageForm from "./TheftMessageForm.jsx";

const TheftMessageContainer = ({
  isAuth,
  officers,
  addNewMessage,
  getOfficersList,
  addNewUnauthorizedMessage,
}) => {
  useEffect(() => {
    isAuth ? getOfficersList() : "";
  }, []);

  const onNewMessageSubmit = (formData) => {
    isAuth ? addNewMessage(formData) : addNewUnauthorizedMessage(formData);
  };

  return (
    <TheftMessageForm
      isAuth={isAuth}
      onSubmit={onNewMessageSubmit}
      officers={officers}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    officers: state.officers.officers,
  };
};

export default connect(mapStateToProps, {
  addNewMessage,
  getOfficersList,
  addNewUnauthorizedMessage,
})(TheftMessageContainer);
