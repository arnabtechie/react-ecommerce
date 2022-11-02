import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PageNotFound from "./components/404";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
    </Router>
  );
}


export default App;