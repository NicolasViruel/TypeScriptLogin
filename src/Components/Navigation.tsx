import { Link } from "react-router-dom";
import "../Css/HomePage.css";
const Navigation = () => {
  return (
    <header>
        <h2 className="logo">Logo</h2>
    <nav className="navigation">
      <Link to="/">Home </Link>
      <Link to="/login">Login </Link>
      <Link to="/singup">Register</Link>
      <Link to="/profile">Profile </Link>
        
      <button className="btnLogin-popup">AboutUs</button>
    </nav>
    </header>
  );
};

export default Navigation;
