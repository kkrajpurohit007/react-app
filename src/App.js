import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavigation from "./component/elements/MainNavigation";
import Home from './component/pages/Home';
import SignIn from './component/pages/SignIn';
import SignUp from './component/pages/SignUp';
import Dashboard from './component/pages/Dashboard';
import FooterComponent from "./component/elements/Footer";


const App = () => {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route path="/login" component={SignIn} />
        <Route path="/registration" component={SignUp} />
      </Switch>
      <FooterComponent />
    </>
  );
};

export default App;
