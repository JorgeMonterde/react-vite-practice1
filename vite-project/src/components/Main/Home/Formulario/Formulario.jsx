import React, { useContext } from "react";
import "./Formulario.css";
import { UserContext } from "../../../../context/userContext";
  

const Formulario = (props) => {
  const { setUserEmail } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    let userInfo = {
      "username": event.target.name.value,
      "email": event.target.email.value,
      "imgUrl": event.target.imgUrl.value,
      "age": event.target.age.value
    }
    //sets provider's (app.js) State
    setUserEmail(userInfo.email);

    //sets parent's (app.js) State
    props.setUserInfo(userInfo);
  }




  return <form onSubmit={handleSubmit}>
    <h2>Formulario</h2>
      <input type="text" name="name" id="name" placeholder="Name"/>
      <input type="text" name="email" id="email" placeholder="Email"/>
      <input type="text" name="imgUrl" id="imgUrl" placeholder="Image url"/>
      <input type="text" name="age" id="age" placeholder="Age"/>
      <input type="submit" value="Send user info" />
    </form>;
};

export default Formulario;
