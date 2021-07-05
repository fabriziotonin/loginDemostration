import React, { useState } from "react";
import LoginPage from "./Components/loginPage/LoginPage";
import HomePage from "./Components/homePage/HomePage";
import { UserProvider } from "./Context/UserContext";
import NavBar from "./Components/navBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  // state that controls the user auth to logIn the page
  const [user, setUser] = useState(false);
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          {/* for protection of routes, verifies user  */}
          {!user ? (
            <Redirect to="/login" />
          ) : (
            <Route exact path="/" component={HomePage} />
          )}
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
