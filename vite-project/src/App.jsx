import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
//import './App.css';
//Contexts
import { UserContext } from "./context/userContext";


function App() {
  const [userEmail, setUserEmail] = useState();

  return (
    <>
      <UserContext.Provider value={{userEmail, setUserEmail}}>
        <BrowserRouter>
          <Header/>
          <Main/>
        </BrowserRouter>
      </UserContext.Provider>
      <Footer/>
    </>
  )
}

export default App
