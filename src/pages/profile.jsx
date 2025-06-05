import React from "react";
import catLogo from '../assets/ico/cat-gray.svg';
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container py-5">
      <div className="card mx-auto shadow-lg" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">
          <img src={catLogo} alt={catLogo}/>
          <h3 className="card-title">{user?.name || "Your Name"}</h3>
          <p className="text-muted mb-1">{user?.email || "example@mail.com"}</p>
          <p className="text-muted">Member of THYNK</p>

          <hr />

          <div className="row mt-4">
            <div className="col">
              <h6>Level</h6>
              <p className="text-primary">7</p>
            </div>
            <div className="col">
              <h6>Points</h6>
              <p className="text-success">1240</p>
            </div>
            <div className="col">
              <h6>Date of Join</h6>
              <p className="text-warning">2025.05</p>
            </div>
          </div>

          <a href="/profile/edit" className="btn btn-outline-primary mt-3">
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
