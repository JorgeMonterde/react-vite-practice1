import React, { useContext } from "react";
import { UserContext } from "../../../../context/userContext";

const Head = () => {
  const {userEmail, setUserEmail} = useContext(UserContext);
  

  return <article>
    <p>{userEmail}</p>
  </article>;
};

export default Head;
