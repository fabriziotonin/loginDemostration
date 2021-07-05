import React from "react";
import { useUser } from "../../Context/UserContext";

export default function NavBar() {
  const { toogleTheme, theme } = useUser();

  return (
    <div className="navbar">
      <button className="btn-cicle-day" onClick={toogleTheme}>
        {theme ? (
          <img src="https://img.icons8.com/ios/50/000000/crescent-moon.png" />
        ) : (
          <img src="https://img.icons8.com/material-outlined/24/000000/sun--v1.png" />
        )}
      </button>
    </div>
  );
}
