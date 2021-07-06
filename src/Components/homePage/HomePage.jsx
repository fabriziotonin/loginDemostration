import React from "react";
import { useEffect } from "react";
import { useUser } from "../../Context/UserContext";
import auth from "../../Helpers/auth";
import Feed from "./Feed";

export default function HomePage(props) {
  const { user, theme, getFeed, setUser } = useUser();
  useEffect(() => {
    getFeed();
  }, []);

  const LogOut = () => {
    auth.logout(() => {
      setUser(false);
      props.history.push("/login");
    });
  };

  return (
    <div className={theme ? "home-d vh-100" : "home-n vh-100"}>
      <Feed LogOut={LogOut} />
    </div>
  );
}
