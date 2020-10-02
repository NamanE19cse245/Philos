import React from "react";
import Home from "./Welcome";
import About from "./About";
import Sign_up from "./Sign_up";
import Questions from "./Questions";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import New_User from "./Sign_up";
function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/sign_up" exact component={Sign_up}></Route>
        <Route path="/questions" exact component={Questions}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Main;
