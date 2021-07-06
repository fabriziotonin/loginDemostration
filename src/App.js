import React from "react";
import LoginPage from "./Components/loginPage/LoginPage";
import HomePage from "./Components/homePage/HomePage";
import { UserProvider } from "./Context/UserContext";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import NavBar from "./Components/navBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  // state that controls the user auth to logIn the page

  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={() => <LoginPage />} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <Route to="*" component={() => "404 Not Found"} />
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
