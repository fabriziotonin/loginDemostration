import React, { useContext, useState } from "react";
import axios from "axios";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [theme, setTheme] = useState(false);
  const [user, setUser] = useState({});

  const toogleTheme = () => {
    setTheme((theme) => !theme);
    // console.log(theme);
  };
  // Couldn't get access to the premium data
  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: "zsvks4n9fqwxzca:uwg66psi63n0acb",
  // };
  // const getFeed = () => {
  //   axios
  //     .get(
  //       "http://api.tradingeconomics.com/markets/forecasts/symbol/EURUSD:CUR?client=zsvks4n9fqwxzca:uwg66psi63n0acb",
  //       { headers }
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const getFeed = (setFeedData) => {
    axios
      .get("https://api.exchangerate.host/latest?base=eur")
      .then(function (response) {
        // console.log(response);
        setFeedData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const value = {
    theme,
    toogleTheme,
    setUser,
    user,
    getFeed,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
