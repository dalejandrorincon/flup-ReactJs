import { BrowserRouter, Routes, Route } from "react-router-dom";
/* -------------------------- importacion de vistas ------------------------- */
import Home from "./Views/Home";
import Login from "./Views/Login"
import Signup from "./Views/Signup";
/* ------------------------ Importacion del contexto ------------------------ */
import RequireAuth from "./components/RequireAuth";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";


const App = () => {
  //const { registerUser } = useContext(UserContext);
  const {user} = useContext(UserContext);
  if(user === false){
    return <p>Cargando...</p>
  }
  return (
        <Routes>
          <Route exact path="/" element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
  );
}

export default App;
