import { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { UserContext } from "../context/UserProvider";

const Home = () => {
  const {signOutUser} = useContext(UserContext);
  const handleClickLogout = async() => {
    try {
      await signOutUser()
    } catch (error) {
      console.log(error.code)
    }
  }
  return(
    <Container>
      <Navbar>
        <Nav>
          <button onClick={handleClickLogout}>Cerrar sesión</button>
        </Nav>
      </Navbar>
      <h1>Home</h1>
    </Container>
  )
}
export default Home;