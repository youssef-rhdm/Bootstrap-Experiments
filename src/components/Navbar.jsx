import { Nav, NavbarToggle, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav variant="tabs">
      <NavbarToggle />
      <NavItem>
        <NavLink as={Link} to={`/`}>
          Home
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink as={Link} to={`/signup`}>
          SignUp
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} to={`/login`}>
          Login
        </NavLink>
      </NavItem>
    </Nav>
  );
}
