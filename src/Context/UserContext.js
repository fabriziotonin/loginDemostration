import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  // La logica que quiero realizar con context
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  const toogleTheme = () => {
    setTheme((theme) => !theme);
    console.log(theme);
  };
  const LoginUser = (data) => {
    setLoading(true);
    localStorage.setItem("ortex_user", JSON.stringify(data));
    setTimeout(() => {
      setLoading(false);
      redirect();
    }, 2000);
  };

  const value = {
    theme,
    toogleTheme,
    LoginUser,
    loading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
