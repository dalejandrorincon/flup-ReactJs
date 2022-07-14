import { useContext, useState } from "react";
import { Container, Form, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { registerUser } = useContext(UserContext);

  const handleOnSubmit = async e => {
    e.preventDefault();
    console.log("Procesando el form:", email, password)
    try {
      await registerUser(email, password);
      console.log("Cuenta creada");
    } catch (error) {
      console.log(error.code);
    }
  }
  return (
    <Container>
      <Navbar>
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/login">Login</Link>
      </Navbar>
      <h1>Registro de usuario</h1>
      <Form onSubmit={handleOnSubmit}>
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
        <Button variant="primary" type="submit">
          Crear cuenta
        </Button>
      </Form>
    </Container>
  )
}
export default Signup;