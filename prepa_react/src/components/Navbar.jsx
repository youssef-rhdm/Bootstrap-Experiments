import { Nav, NavbarToggle, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav variant="tabs">
      <NavbarToggle />
      <NavItem>
        <NavLink>
          <Link to={`/`}>Home</Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <Link to={`/signup`}>SignUp</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to={`/login`}>Login</Link>
        </NavLink>
      </NavItem>
    </Nav>
  );
}
