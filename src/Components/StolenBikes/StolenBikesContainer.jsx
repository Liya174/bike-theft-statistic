import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getOfficersList } from "../../redux/officers-reducer.js";
import {
  getTheftMessages,
  deleteMessage,
  editMessage,
} from "../../redux/theft-message-reducer.js";
import {
  dateFormatter,
  typeFormatterToRus,
} from "../../utils/formatters/formatters.js";
import StolenBikes from "./StolenBikes.jsx";

const StolenBikesContainer = ({
  isAuth,
  officers,
  thefts,
  getOfficersList,
  getTheftMessages,
  deleteMessage,
  editMessage,
}) => {
  if (!isAuth) {
    return <Redirect to={"/"} />;
  }

  useEffect(() => {
    getOfficersList();
    getTheftMessages();
  }, []);

  //модальное окно для ввода резолюции
  const [isResolutionOpen, setIsResolutionOpen] = useState(false);
  const [resolutionId, setResolutionId] = useState("");
  const openResolution = (id) => {
    setResolutionId(id);
    setIsResolutionOpen(true);
  };
  const closeResolution = () => setIsResolutionOpen(false);
  const onStatusDoneClicked = (resolution) => {
    if (resolution) {
      closeResolution();
      editMessage(resolutionId, { status: "done", resolution });
    }
  };

  //моадльное окно для с подробной информацией о краже
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const openEditMessage = (id) => setSelectedMessageId(id);
  const closeEditMessage = () => setSelectedMessageId(null);

  const formattedThefts = [];
  if (thefts) {
    thefts.forEach((theft) => {
      const currentOfficer = officers.find(
        (officer) => officer._id === theft.officer
      );

      formattedThefts.push({
        ...theft,
        date: dateFormatter(theft.date),
        createdAt: dateFormatter(theft.createdAt),
        updateAt: dateFormatter(theft.updateAt),
        officer: currentOfficer
          ? `${currentOfficer.firstName} ${currentOfficer.lastName}`
          : "",
        type: typeFormatterToRus(theft.type),
      });
    });
  }

  return (
    <StolenBikes
      formattedThefts={formattedThefts}
      officers={officers}
      deleteMessage={deleteMessage}
      editMessage={editMessage}
      isResolutionOpen={isResolutionOpen}
      onStatusDoneClicked={onStatusDoneClicked}
      openResolution={openResolution}
      closeResolution={closeResolution}
      selectedMessageId={selectedMessageId}
      openEditMessage={openEditMessage}
      closeEditMessage={closeEditMessage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    officers: state.officers.officers,
    thefts: state.theftMessages.thefts,
  };
};

export default connect(mapStateToProps, {
  getOfficersList,
  getTheftMessages,
  deleteMessage,
  editMessage,
})(StolenBikesContainer);
