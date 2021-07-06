import React from "react";
import auth from "../../Helpers/auth";

export default function HomePage(props) {
  return (
    <div>
      Home
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
