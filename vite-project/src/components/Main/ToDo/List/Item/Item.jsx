import React from "react";

const Item = (props) => {

  const {deleteItem} = props;


  return (
    <div className="task-card">
      <p>{props.taskName}</p>
      <button onClick={deleteItem}>Borrar</button>
    </div>
  
  );
};

export default Item;
