import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/HomePage';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App container">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
