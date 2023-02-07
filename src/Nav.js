import "./Nav.css"
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav className="Navs">
          <span><Link to="/hamburger">My Apple</Link></span>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contents">Contents</Link></li>
          <li><a href="#footer">Contacts</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
