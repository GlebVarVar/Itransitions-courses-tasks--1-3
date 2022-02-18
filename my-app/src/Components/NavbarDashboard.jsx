import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import { auth, logout } from "D:/Work_1/my-app/src/FirebaseConfig/config.js";

// import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


// special navbar with logout function-button, 
// you can shorten the code by getting data from the navbar component

function NavbarDashboard() {

    const [user, loading, error] = useAuthState(auth);
    
    return(

    <Navbar bg="light" expand="lg">
        <Container>
           <Link style={{ textDecoration: 'none' }} to = "/"> <Navbar.Brand>Awesome React</Navbar.Brand> </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link to="/dashboard">Users</Nav.Link>
                <Nav.Link href="#link">Chat</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
            <Nav.Link href="#" disabled>
            {user?.email}
            </Nav.Link>
            <Button onClick={logout}>
                Logout
            </Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}



export default NavbarDashboard;