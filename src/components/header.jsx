import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// import { ReactComponent as CatLogo } from '../assets/ico/cat-gray.svg'; // Import your logo image if needed
import catLogo from '../assets/ico/cat-gray.svg';

// import { useEffect } from "react";



const Header = () => {
  const { user, login, logout } = useAuth();
  // login({name: "Test User", email: "test@test.com"});
  
  useState(() => {
    // тільки для тесту, потім видалиш
    // login({ name: "Test User", email: "test@test.com" });
  });

  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <a href="/">THYNK</a>
          </div>
				{user ? (
          // <div className="header__avatar"><CatLogo /></div>
          <Link to="/profile" className="header__avatar-link">
            <div className="header__avatar" title={"Login user: " + user.name}>
              <img src={catLogo} alt={catLogo}/>
              {/* <span>{user.name}</span> */}
            </div>
          </Link>
        ) : (
          <Link to="/login" className="header__logreg" onClick={login}>Log & Reg</Link>
        ) }
     
        
        <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
          <ul>
            <li className="link"><Link to={"/"}>Main</Link></li>
            <li className="link"><Link to={"/course"}>Courses</Link></li>
            {user ? (
						<li className="link"><Link to={"/profile"}>Profile</Link></li>
            ) : (
              <li className="link"><Link to={"/login"}>Login</Link></li>
            )}
						<li className="link"><a href="https://t.me/thynkcommunity">Community</a></li>
						<li className="link"><Link to={"/about"}>About</Link></li>
						<li className="link"><a href="https://telegra.ph/FAQ--Frequently-Asked-Questions-05-31">FAQ</a></li>
						<li className="link"><Link to={"/"} onClick={logout}>Logout</Link></li>
          </ul>
        </nav>

        <div className="burger" onClick={toggleMenu}>
					<div className={`burger__line ${isMenuOpen ? "burger__line--active" : ""}`}></div>
					<div className={`burger__line ${isMenuOpen ? "burger__line--active" : ""}`}></div>
					<div className={`burger__line ${isMenuOpen ? "burger__line--active" : ""}`}></div>
				</div>
      </div>
    </header>
  );
};

export default Header;
