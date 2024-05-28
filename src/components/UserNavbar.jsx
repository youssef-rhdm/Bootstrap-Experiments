import { Nav, NavbarToggle, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserNavbar() {
  return (
    <Nav variant="tabs">
      <NavbarToggle />
  
      <NavItem>
        <NavLink as={Link} to={`/dashboard`}>
          Dashboard
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink as={Link} to={`/profile`}>
          Profile
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink as={Link} to={`/logout`}>
          Logout
        </NavLink>
      </NavItem>
      
    </Nav>
  );
}
