import React from "react";
import { connect } from "react-redux";
import { addNewMessage } from "../../redux/theft-message-reducer.js";
import TheftMessageForm from "./TheftMessageForm.jsx";

const TheftMessageContainer = ({ isAuth, addNewMessage }) => {
  const onNewMessageSubmit = (formData) => {
    addNewMessage(formData);
  };

  return <TheftMessageForm isAuth={isAuth} onSubmit={onNewMessageSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { addNewMessage })(
  TheftMessageContainer
);
