import React from "react";
import { connect } from "react-redux";

import TheftMessageForm from "./TheftMessageForm.jsx";

const TheftMessageContainer = (props) => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return <TheftMessageForm handleSubmit={handleSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(TheftMessageContainer);
