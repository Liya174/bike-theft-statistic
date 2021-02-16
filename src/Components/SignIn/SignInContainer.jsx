import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { signIn } from "../../redux/auth-reducer.js";
import SignInForm from "./SignInForm.jsx";

const SignInContainer = ({ isAuth, signIn }) => {
  if (isAuth) {
    return <Redirect to={"/menu"} />;
  }

  const onSubmit = (formData) => {
    signIn(formData);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { signIn })(SignInContainer);
