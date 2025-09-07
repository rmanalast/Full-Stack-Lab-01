// This component renders the navigation bar with links to different sections of the application.
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="page-links">
        <span><a href="#">Employees</a></span>
        <span><a href="#">Organization</a></span>
      </div>
    </nav>
  );
}

export default Nav;
