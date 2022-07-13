import React, {useState, useContext} from 'react';
import { UserContext } from '../context/UserProvider';
import {Button,Form, Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user, loginUser} = useContext(UserContext);

  const handleOnSubmit = async e =>{
    e.preventDefault();
    try {
      await loginUser(email,password);
      console.log("Sesión iniciada para ", email)
    } catch (error) {
      console.log(error.code);
    }
  }
  return(
    <Container>
      <Navbar>
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/signup">Sign up</Link>
      </Navbar>
      <h1>Login page</h1>
      <h2>{user ? "En linea" : "Offline"}</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(ev)=> setEmail(ev.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(ev)=> setPassword(ev.target.value)} />
        </Form.Group>
        <Button variant="primary" type='submit'>
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  )
}
export default Login;