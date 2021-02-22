import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import AuthorizedMenu from "./AuthorizedMenu.jsx";

const AuthorizedMenuContainer = ({ isAuth }) => {
  if (!isAuth) {
    return <Redirect to={"/"} />;
  }

  return <AuthorizedMenu />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {})(AuthorizedMenuContainer);
