import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Button, Form, Container, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password)
      console.log("Sesión iniciada")
      navigate("/")
    } catch (error) {
      console.log(error.code);
    }
  }
  return (
    <Container>
      <Navbar>
        <NavLink className="nav-link" to="/">Inicio</NavLink>
        <NavLink className="nav-link" to="/signup">Sign up</NavLink>
      </Navbar>
      <h1>Login page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(ev) => setEmail(ev.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} />
        </Form.Group>
        <Button variant="primary" type='submit'>
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  )
}
export default Login;