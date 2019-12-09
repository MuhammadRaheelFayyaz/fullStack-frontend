import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../actions/user.action";
const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  if (!check) {
    setCheck(true);
    props.setUser();
  }
  console.log("props.user :", props);
  let { name, session } = props.user;
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">Full Stack</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                View User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to={"/users/all"}>All Users</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/users/deleted"}>Blocked Users</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/users/undeleted"}>Un Blocked Users</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {session ? (
            <span>
              <span>{name}</span> |
              <Link
                onClick={() => props.signOut()}
                // style={{ cursor: "pointer" }}
              >
                Sign out
              </Link>
            </span>
          ) : (
            <span>
              <Link to="/signin">Sign in</Link> |
              <Link to="/register">Join us</Link>
            </span>
          )}
        </Collapse>
      </Navbar>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
