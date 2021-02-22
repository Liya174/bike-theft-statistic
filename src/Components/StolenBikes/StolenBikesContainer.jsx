import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getOfficersList } from "../../redux/officers-reducer.js";
import { getTheftMessages } from "../../redux/theft-message-reducer.js";
import StolenBikes from "./StolenBikes.jsx";

const StolenBikesContainer = ({
  isAuth,
  getOfficersList,
  officers,
  getTheftMessages,
  thefts,
}) => {
  if (!isAuth) {
    return <Redirect to={"/"} />;
  }

  useEffect(() => {
    getOfficersList();
    getTheftMessages();
  }, []);

  return <StolenBikes thefts={thefts} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    officers: state.officers.officers,
    thefts: state.theftMessages.thefts,
  };
};

export default connect(mapStateToProps, { getOfficersList, getTheftMessages })(
  StolenBikesContainer
);
