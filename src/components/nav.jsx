import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from "react-bootstrap";


const NavBar = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" 
>
      <Container id="navbar">
        <NavbarBrand as={Link} to="/">Poppy Lewin</NavbarBrand>
       <span class="navbar-text">Software Developer</span>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav >
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



