import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate} from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  
} from "D:/Work_1/my-app/src/FirebaseConfig/config.js";

import { Form, Row, Col, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarmain from "../Components/Navbar";



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  // const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);




  return (
    <div>
      <Navbarmain/>
      <Container className='formContainer'>
          <Form>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Gleb Kostrov" value={name}
            onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="info@itransition.com" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>


            <Row> 
              <Col>    
              <Button variant="primary"  onClick={register}>
                Register
              </Button>
              </Col> 
              <Col>
                <div>
                Already have an account? <Link to="/">Login</Link> now.
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
    </div>
  );
}



export default Register;
