import React, {useState} from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  // const { user } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            autoComplete="off"
            tabIndex={1}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            tabIndex={2}
          />
          <button type="submit" onClick={bigCat} className={`link logreg__btn ${isClicked ? "_active" : ""}`} tabIndex={3}>
            Login
          </button>
        </form>
        <div className="logreg__hint">
          Don’t have an account? <Link className="logreg__link" to="/register" tabIndex={4}>Register now</Link>
          </div>
      </div>
    </div>
  );
};

export default Login;
