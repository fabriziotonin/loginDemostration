import React, { useContext, useState } from "react";
import axios from "axios";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  // La logica que quiero realizar con context
  const [theme, setTheme] = useState(false);
  const [user, setUser] = useState({});
  const headers = {
    "Content-Type": "application/json",
    Authorization: "zsvks4n9fqwxzca:uwg66psi63n0acb",
  };
  const toogleTheme = () => {
    setTheme((theme) => !theme);
    console.log(theme);
  };

  const getFeed = () => {
    axios
      .get(
        "http://api.tradingeconomics.com/markets/forecasts/symbol/EURUSD:CUR?client=zsvks4n9fqwxzca:uwg66psi63n0acb",
        {
          topic: "subscribe",
          to: "EURUSD:CUR",
        },
        { headers }
      )
      .then(function (response) {
        console.log(response);
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
