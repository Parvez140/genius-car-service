import React, { useRef } from "react";
import './Login.css';
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nevigate = useNavigate();

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      // error,
    ] = useSignInWithEmailAndPassword(auth)

    const handleSubmit = event => {
        event.preventDefault();
        const email =  emailRef.current.value;
        const password =  passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
    }
    const nevigateRegister = event => {
        nevigate('/register')
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if(user){
      nevigate('/home')
    }
  return (
    <div className="container login-form">
        <h2 className="text-center text-primary p-3">Login</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form><br />
      <p className='text-primary'>New to Genius Car <Link to='/register' onClick={nevigateRegister} className="text-danger text-decoration-none">Please Register</Link></p>
    </div>
  );
};

export default Login;
