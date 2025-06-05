import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="home logreg">
      <div className="logreg__popup"></div>
    </div>
  );
};

export default Profile;
