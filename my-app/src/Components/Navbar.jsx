import { Navbar, Container, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

// regular navbar

function Navbarmain() {
    
    return(
    <Navbar bg="light" expand="lg">
        <Container>
           <Link style={{ textDecoration: 'none' }} to = "/"> <Navbar.Brand>Awesome React</Navbar.Brand> </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link style={{ textDecoration: 'none', color: 'grey' }} to = '/'>Users</Link></Nav.Link>
                <Nav.Link><Link style={{ textDecoration: 'none', color: 'grey' }} to = '/chat'>Chat</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}



export default Navbarmain;