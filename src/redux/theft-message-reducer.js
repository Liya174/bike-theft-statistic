const initialState = {
  status: "new",
  date: "", //	Date
  licenseNumber: "",
  color: "",
  type: "",
  ownerFullName: "",
  officer: "",
  createdAt: "",
  updateAt: "",
  clientId: "",
  description: "",
  resolution: "",
};

const theftMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default theftMessageReducer;
