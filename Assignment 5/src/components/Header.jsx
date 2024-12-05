import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../images/netPix logo.png";


function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  function homePage() {
      navigate(`/`);
  }

  function loginPage() {
      navigate(`/login`);
  }

  function registerPage() {
      navigate(`/register`);
  }

  return (
    <div className="header">
      <div className="logo">
        <img src="logo" alt="pixlogo" className="logo-image" />
      </div>

        <div className="SignButtons">
          <button className="Up" onClick={() => { registerPage() }}> Sign Up</button>
          <button className="In" onClick={() => { loginPage() }}>Sign In</button>
        </div>
  `   <div className="search-bar">
        <form aria-label="Search the site">
          <input className="search-input" type="search" placeholder="Search..." />
          <button type="submit" aria-label="Search">
            <i className="search-icon fa fa-search"></i>
          </button>
        </form>
      </div>`
    </div>
  )
}
export default Header;