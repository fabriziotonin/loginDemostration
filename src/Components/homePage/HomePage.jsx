import React from "react";
import { useUser } from "../../Context/UserContext";
import auth from "../../Helpers/auth";

export default function HomePage(props) {
  const { user, theme } = useUser();
  return (
    <div>
      WellCome {user.email}
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/login");
          });
        }}
      >
        logout
      </button>
    </div>
  );
}
