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
  DropdownItem,
  NavbarText
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
  let { name, user_id, session } = props.user;
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
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
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
