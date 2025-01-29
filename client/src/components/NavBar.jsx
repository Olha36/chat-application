import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import  Notifications  from "../components/chat/Notifications";
import { AuthContext } from "../context/AuthContext";


const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar className="mb-4" style={{ height: "3.75rem", backgroundColor: "#b07ac5" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            ChattApp{" "}
          </Link>
        </h2>
        {user && (
          <span className="text-muted">Logged in as {user?.name} </span>
        )}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {user && (
              <>
                <Notifications />
                <Link
                  onClick={() => logoutUser()}
                  to="/login"
                  className="link-light text-decoration-none"
                >
                  Logout
                </Link>
              </>
            )}

            {!user && (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="link-light text-decoration-none"
                >
                  Register
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
