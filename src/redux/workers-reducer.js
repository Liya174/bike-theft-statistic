import { authAPI } from "../api/api.js";
import store from "./store.js";

const ADD_WORKERS = "workers/ADD_WORKERS";

const initialState = {
  workers: [],
};

//---------REDUCER-----------

const workersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORKERS:
      return {
        ...state,
        workers: [...state.workers, ...workers],
      };

    default:
      return state;
  }
};

//-------ACTION CREATORS------------

export const addWorkers = (workers) => ({
  type: ADD_WORKERS,
  workers,
});

//--------THUNKS---------------
export const getWorkersList = (userData) => (dispatch) => {
  console.log("signUp");
};

export default workersReducer;
