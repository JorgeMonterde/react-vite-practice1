import React from "react";
import "./Card.css"

const Card = (props) => {
  let {username, email, imgUrl, age} = props.userInfo;



  return <article className="user_card">
    <p>{username}</p>
    <img src={imgUrl} width="300px" />
    <p>{email}</p>
    <p>Age: {age}</p>
  </article>;
};

export default Card;
