import "./style.css";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { UsersList } from "./Components/UsersList";
import { UserCreate } from "./Components/UserCreate";

export const App = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/" component={UsersList} exact={true} />
        <Route path="/create" component={UserCreate} />
      </Switch>
    </div>
  );
};

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
