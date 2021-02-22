import { Route, Switch } from "react-router";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import Footer from "./Components/Footer/Footer.jsx";
import HeaderContainer from "./Components/Header/HeaderContainer.jsx";
import TheftMessageContainer from "./Components/TheftMessage/TheftMessageContainer.jsx";
import UserCreateContainer from "./Components/UserCreate/UserCreateContainer.jsx";
import SignInContainer from "./Components/SignIn/SignInContainer.jsx";
import MainContainer from "./Components/Main/MainContainer.jsx";
import AuthorizedMenuContainer from "./Components/AuthorizedMenu/AuthorizedMenuContainer.jsx";
import OfficersContainer from "./Components/Officers/OfficersContainer.jsx";
import StolenBikesContainer from "./Components/StolenBikes/StolenBikesContainer.jsx";

const App = (props) => {
  return (
    <div className="app">
      <HeaderContainer />
      <div className="main">
        <div className="container">
          <Switch>
            <Route path="/registration" component={UserCreateContainer} />
            <Route path="/sign-in" component={SignInContainer} />
            <Route path="/menu" component={AuthorizedMenuContainer} />
            <Route path="/officers" component={OfficersContainer} />
            <Route path="/stolen-bikes" component={StolenBikesContainer} />
            <Route path="/theft-message" component={TheftMessageContainer} />
            <Route path="/" exact component={MainContainer} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
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
