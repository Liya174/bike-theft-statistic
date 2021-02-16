import React from "react";
import { connect } from "react-redux";
import Workers from "./Workers.jsx";

const WorkersContainer = (props) => {
  return <Workers />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(WorkersContainer);
