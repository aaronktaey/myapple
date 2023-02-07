import "./Nav.css"

function Nav() {
  return (
    <div>
      <nav className="Navs">
          <span><a href="">My Apple</a></span>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contents">Contents</a></li>
          <li><a href="#footer">Contacts</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
