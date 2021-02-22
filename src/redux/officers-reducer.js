import { officersAPI } from "../api/api.js";
import store from "./store.js";

const UPDATE_OFFICERS_LIST = "officers/UPDATE_OFFICERS_LIST";

const initialState = {
  officers: [],
};

//---------REDUCER-----------
const officersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_OFFICERS_LIST:
      return {
        ...state,
        officers: action.officers,
      };

    default:
      return state;
  }
};

//-------ACTION CREATORS------------
export const updateOfficerList = (officers) => ({
  type: UPDATE_OFFICERS_LIST,
  officers,
});

//--------THUNKS---------------
export const getOfficersList = () => (dispatch) => {
  const token = store.getState().auth.token;
  officersAPI
    .getOfficers(token)
    .then((res) => {
      if (res.status === 200) {
        dispatch(updateOfficerList(res.data));
      }
    })
    .catch((request) => alert(request.message));
};

export const addNewOfficer = (newOfficerData) => (dispatch) => {
  const token = store.getState().auth.token;
  officersAPI
    .addNewOfficer(newOfficerData, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch(getOfficersList());
      }
    })
    .catch((request) => alert(request.message));
};

export const editOfficer = (id, editingValue) => (dispatch) => {
  const chosenOfficer = store
    .getState()
    .officers.officers.find((officer) => officer._id === id);
  const newOfficerData = { ...chosenOfficer, ...editingValue };
  const token = store.getState().auth.token;
  officersAPI
    .editOfficer(newOfficerData, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch(getOfficersList());
      }
    })
    .catch((request) => alert(request.message));
};

export const deleteOfficer = (id) => (dispatch) => {
  const token = store.getState().auth.token;
  officersAPI
    .deleteOfficer(id, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch(getOfficersList());
      }
    })
    .catch((request) => alert(request.message));
};

export default officersReducer;
