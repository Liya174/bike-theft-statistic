import React from "react";
import { connect } from "react-redux";
import Header from "./Header.jsx";
import { signOut } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
  return <Header auth={props.auth} signOut={props.signOut} />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { signOut })(HeaderContainer);
