import React, {useState} from "react";
import {Link} from "react-router-dom";
 import triangle from "../assets/ico/triangleBlue.svg";

const Login = () => {
  // const { user } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  
// Універсальний обробник змін для будь-якого інпуту
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // щоб сторінка не перезавантажувалась
    console.log("Form data:", formData);
    // Тут можна викликати API, валідацію і т.д.
  };
  const [isClicked, setClicked] = useState(false);

  const bigCat = () => setClicked(!isClicked);


  return (
    <div className="home logreg">
      <div className="logreg__popup">
        <h1 className="logreg__title">Register</h1>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="Nickname"
            autoComplete="off"
            tabIndex={1}
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            autoComplete="off"
            tabIndex={2}
          />
          <div className="logreg__select">
            <select
              id="role"
              name="role"
              className="logreg__select-custom"
              value={formData.role}
              onChange={handleChange}
              plaseholder="Role"
              tabIndex={3}
            >
              <option value="">Role</option>
              <option value="learner">Learner</option>
              <option value="teacher">Teacher</option>
            </select>
            <img src={triangle} alt="▼" className="custom-arrow" style={{ transform: 'rotate(180deg)' }}/>
          </div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            tabIndex={4}
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            tabIndex={5}
          />
          <button type="submit" onClick={bigCat} className={`link logreg__btn ${isClicked ? "_active" : ""}`} tabIndex={6}>
            Register
          </button>
        </form>
        <div className="logreg__hint">
          Already have an account? <Link className="logreg__link" to="/login" tabIndex={7}>Login now</Link>
          </div>
      </div>
    </div>
  );
};

export default Login;
