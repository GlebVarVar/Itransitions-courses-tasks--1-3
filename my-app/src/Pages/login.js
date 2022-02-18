import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Form,  Container } from 'react-bootstrap'

import {
  auth,
  logInWithEmailAndPassword
} from "D:/Work_1/my-app/src/FirebaseConfig/config.js";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import "./styles.css";

    
import Navbarmain from '../Components/Navbar';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
return (
  <div>
    <Navbarmain/>
      <Container className='formContainer'>
        
        <Form>
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
            <Button variant="primary"  onClick={() => logInWithEmailAndPassword(email, password) }>
              login
            </Button>
            </Col> 
            <Col>
              <div>
              Don't have an account? <Link to="/register">Register</Link> now.
              </div>
            </Col>
          </Row>
        </Form>
        </Container>  
  </div>
    
  );}

export default Login;
