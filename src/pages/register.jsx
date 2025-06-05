import React, {useState} from "react";
// import { useAuth } from "../contexts/AuthContext";

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
        <h1 className="logreg__title">Log In</h1>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="Nickname"
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          <button type="submit" onClick={bigCat} className={`link logreg__btn ${isClicked ? "_active" : ""}`}>
            Register
          </button>
        </form>
        <div className="logreg__hint">
          Already have an account? <a className="logreg__link" href="/login">Login now</a>
          </div>
      </div>
    </div>
  );
};

export default Login;
