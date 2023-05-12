import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, getMe } from "../redux/actions/authActions";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Auth App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to={"/users/dashboard"}>
                  Dashboard ({user?.name})
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(logout(navigate));
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
