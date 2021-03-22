import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage/HomePage";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Destination from "./components/Destination/Destination";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = React.createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <h4>User : {loggedInUser.name}</h4>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <HomePage/>
            </Route>
            <PrivateRoute path="/destination">
              <Destination/>
            </PrivateRoute>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
