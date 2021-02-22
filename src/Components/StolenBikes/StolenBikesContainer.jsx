import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import StolenBikes from "./StolenBikes.jsx";

const StolenBikesContainer = ({ isAuth }) => {
  if (!isAuth) {
    return <Redirect to={"/"} />;
  }

  return <StolenBikes isAuth={isAuth} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {})(StolenBikesContainer);
