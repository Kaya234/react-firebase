import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";

function Navigation() {
  return (
    <Navbar expand="lg" bg="secondary" data-bs-theme="dark">
      <Container fluid>
        <Link className="navbar" to="./">
          <Navbar.Brand>
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              className="d-inline-block align-center nav-logo"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className="text-light">Courses for you</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-collapse" navbarScroll>
            <li className="nav-item">
              <Link className="nav-link" id="courses-link" to="./courses">
                Courses
              </Link>
            </li>
            <Dropdown />
          </Nav>
          <Searchbar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
