import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Formulario from "./Formulario/Formulario";
import Card from "./Card/Card";
import Head from "./Head/Head";


const Home = () => {
  const [usersInfo, setUserInfo] = useState();

  const paintUserCard = () => {
    if(usersInfo){
      return <Card userInfo={usersInfo}/>
    }
  };

  return <section className="home">
    <Head />
    <Formulario setUserInfo={setUserInfo} users={usersInfo} />
    {paintUserCard()}
  </section>;
};

export default Home;
