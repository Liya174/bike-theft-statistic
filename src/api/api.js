import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: " http://84.201.129.203:8888/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authAPI = {
  signUp(userInfo) {
    return instance
      .post(`/api/auth/sign_up`, userInfo)
      .then((response) => response);
  },
  signIn(userData) {
    return instance
      .post(`/api/auth/sign_in`, userData)
      .then((response) => response);
  },
};
