import React, { useState } from "react";
import Item from "./Item/Item";
import { v4 as uuidv4 } from 'uuid';



const List = (props) => {
  const {tasks, deleteTask} = props;

  const printTasks = () => tasks.map((task) => {
    let key = uuidv4();
    return <Item key={key} taskName={task.task} deleteItem={() => deleteTask(task.id)}/>
  });




  return (
    <ul id="list">
      {printTasks()}
    </ul>
  );
};

export default List;
