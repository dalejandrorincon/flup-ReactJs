import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(false);

  useEffect(()=>{
    const unSuscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if(user){
        setUser({email: user.email, uid: user.uid});
      }else{
        setUser(null);
      }
    })
    return () => unSuscribe();
  },[])

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  }
  const loginUser = (email,password) => {
    signInWithEmailAndPassword(auth, email, password);
  }
  const signOutUser = () => {
    signOut(auth);
  }

  return(
    <UserContext.Provider value={{user,setUser, registerUser, loginUser, signOutUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;