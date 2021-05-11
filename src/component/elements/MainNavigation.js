import { Link } from "react-router-dom";
import "./MainNavigation.css";
import { Navbar, Nav, Button } from "react-bootstrap";

const MainNavigation = props => {
  

  return (
    
    <Navbar bg="light" expand="lg" variant="light">
      <Navbar.Brand as={Link} to='/'>
        <img src="./logo.png" alt="US-BANK" height="30px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>

        
        <Nav className="inline">
          <Button as={Link} to='/login' variant="secondary" size="sm" className="mr-1" >Login</Button>
          <Button as={Link} to='/registration' variant="primary" size="sm" >Registration</Button>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};
export default MainNavigation;
