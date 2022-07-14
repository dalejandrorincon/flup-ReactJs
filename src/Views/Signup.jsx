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
    <Container className="loginCard mt-5">
      <p className="text-center mb-0">Registrate en</p>
      <h1 className="text-center">Flup</h1>
      <Form onSubmit={handleOnSubmit}>
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
        <Button variant="link" type="submit">
          Crear cuenta
        </Button>
      </Form>
      <Navbar>
        <Link className="nav-link" to="/login">Iniciar sesión</Link>
      </Navbar>
    </Container>
  )
}
export default Signup;