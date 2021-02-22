import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Main from "./Main.jsx";

const MainContainer = ({ isAuth }) => {
  if (isAuth) {
    return <Redirect to={"/menu"} />;
  }

  return <Main />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {})(MainContainer);
