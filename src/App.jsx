import { Route, Switch } from "react-router";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import Footer from "./Components/Footer/Footer.jsx";
import HeaderContainer from "./Components/Header/HeaderContainer.jsx";
import UsersList from "./Components/UsersList/UsersList.jsx";
import TheftMessageContainer from "./Components/TheftMessage/TheftMessageContainer.jsx";
import UserCreateContainer from "./Components/UserCreate/UserCreateContainer.jsx";
import SignInContainer from "./Components/SignIn/SignInContainer.jsx";
import MainContainer from "./Components/Main/MainContainer.jsx";
import AuthorizedMenuContainer from "./Components/AuthorizedMenu/AuthorizedMenuContainer.jsx";
import WorkersContainer from "./Components/Workers/WorkersContainer.jsx";

const App = (props) => {
  return (
    <div className="app">
      <HeaderContainer />
      <div className="container">
        <div className="main">
          <Switch>
            <Route path="/theft-message" component={TheftMessageContainer} />
            {/* <Route path="/users" component={UsersList} /> */}
            <Route path="/registration" component={UserCreateContainer} />
            <Route path="/sign-in" component={SignInContainer} />
            <Route path="/menu" component={AuthorizedMenuContainer} />
            <Route path="/workers" component={WorkersContainer} />
            <Route path="/" component={MainContainer} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const BikeApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default BikeApp;
