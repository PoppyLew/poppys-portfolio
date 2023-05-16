import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" 
>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link as={Link} to="/" >Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" >About me</Nav.Link>
            <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
     
       
        
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    )
}

export default NavBar



