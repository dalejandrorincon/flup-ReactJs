import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Button, Form, Container, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password)
      console.log(user);
      setTimeout(function(){
        console.log("Sesión iniciada")
        navigate("/")
    }, 1000);
    } catch (error) {
      console.log(error.code);
    }
  }
  return (
    <Container className='loginCard mt-5'>
      <p className='text-center mb-0'>Inicia sesión en </p>
      <h1 className='text-center'>Flup</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(ev) => setEmail(ev.target.value)} />
          <Form.Text className="text-muted">
            Nunca compartiremos tu correo con nadie más.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} />
        </Form.Group>
        <Button variant="link" type='submit'>
          Iniciar sesión
        </Button>
      </Form>
      <Navbar>
        <NavLink className="nav-link" to="/signup">Registro</NavLink>
      </Navbar>
    </Container>
  )
}
export default Login;