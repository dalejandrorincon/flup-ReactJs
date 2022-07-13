import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp} from 'reactfire';
import {Button,Form, Container} from 'react-bootstrap';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebaseApp();
  const submit = async () =>{
    console.log("Iniciar sesión");
    await firebase.auth().createUserWithEmailAndPassword(email,password);
  }
  return(
    <Container>
      <Form>
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
        <Button variant="primary" onClick={submit}>
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  )
}