import * as axios from "axios";

const instance = (token) => {
  return axios.create({
    // withCredentials: true,
    baseURL: " http://84.201.129.203:8888/api/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const authAPI = {
  signUp(userInfo) {
    return instance()
      .post(`/auth/sign_up`, userInfo)
      .then((response) => response);
  },
  signIn(userData) {
    return instance()
      .post(`/auth/sign_in`, userData)
      .then((response) => response);
  },
};

export const officersAPI = {
  getOfficers(token) {
    return instance(token)
      .get(`/officers`)
      .then((response) => response);
  },
  // getCurrentOfficer(id, token) {
  //   return instance(token)
  //     .get(`/officers/id`)
  //     .then((response) => console.log(response));
  // },
  addNewOfficer(officerData, token) {
    return instance(token)
      .post(`/officers`, officerData)
      .then((response) => response);
  },
  editOfficer(officerData, token) {
    return instance(token)
      .put(`/officers/${officerData._id}`, officerData)
      .then((response) => response);
  },
  deleteOfficer(id, token) {
    return instance(token)
      .delete(`/officers/${id}`)
      .then((response) => response);
  },
};
