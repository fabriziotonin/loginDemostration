import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  // La logica que quiero realizar con context
  const [theme, setTheme] = useState(false);
  const [user, setUser] = useState({});

  const toogleTheme = () => {
    setTheme((theme) => !theme);
    console.log(theme);
  };

  const value = {
    theme,
    toogleTheme,
    setUser,
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
