import { casesAPI } from "../api/api";
import store from "./store.js";

const ADD_THEFTS = "theft-message/ADD_THEFTS";

const initialState = {
  thefts: [],
};

const theftMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_THEFTS:
      return {
        ...state,
        thefts: action.thefts,
      };

    default:
      return state;
  }
};

//--------- ACTIONS ---------------------
export const addThefts = (thefts) => ({
  type: ADD_THEFTS,
  thefts,
});

//------------ THUNKS ----------------

export const addNewMessage = (messageData) => (dispatch) => {
  const token = store.getState().auth.token;
  const newMessage = {
    status: "new",
    date: Date.now(),
    licenseNumber: messageData.licenseNumber,
    color: messageData.color,
    type: messageData.type,
    ownerFullName: messageData.ownerFullName,
    officer: messageData.officer,
    createdAt: Date.now(),
    updateAt: Date.now(),
    description: messageData.description,
    resolution: "",
  };
  casesAPI
    .addNewMessage(token, newMessage)
    .then((res) => console.log(res))
    .catch((req) => alert(req.message));
};

export const getTheftMessages = () => (dispatch) => {
  const token = store.getState().auth.token;
  casesAPI
    .getAllMessages(token)
    .then((res) => dispatch(addThefts(res.data)))
    .catch((req) => alert(req.message));
};

export default theftMessageReducer;
