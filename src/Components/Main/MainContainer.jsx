import React from "react";
import { connect } from "react-redux";
import Main from "./Main.jsx";

const MainContainer = ({ isAuth }) => {
  console.log("isAuth: ", isAuth);

  if (isAuth) {
    console.log("yes");
    return <Redirect to={"/menu"} />;
  }

  return <Main />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {})(Main);
