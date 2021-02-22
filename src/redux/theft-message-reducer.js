const ADD_THEFTS = "theft-message/ADD_THEFTS";

const initialState = {
  allThefts: [],
};

const theftMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//--------- ACTIONS ---------------------
export const addThefts = (allThefts) => ({
  type: ADD_THEFTS,
  allThefts,
});

//------------ THUNKS ----------------

export const addNewMessage = (messageData) => (dispatch) => {
  const {
    licenseNumber,
    color,
    type,
    ownerFullName,
    officerId,
    description,
  } = messageData;
  const newMessage = {
    status: "new",
    date: new Date(),
    licenseNumber,
    color,
    type,
    ownerFullName,
    officer: officerId,
    createdAt: new Date(),
    updateAt: new Date(),
    // clientId: "",
    description,
    resolution: "",
  };
  console.log(newMessage);
};

export default theftMessageReducer;
