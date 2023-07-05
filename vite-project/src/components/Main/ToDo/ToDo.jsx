import React, { useState } from "react";
import Form from "./Form/Form";
import ControlButtons from "./ControlButtons/ControlButtons";
import List from "./List/List";
import { v4 as uuidv4 } from 'uuid';

const defaultTasks = [{
  "task": "Barrer",
  "id": uuidv4()
},{
  "task": "Fregar",
  "id": uuidv4()
},{
  "task": "Limpiar el polvo",
  "id": uuidv4()
}];



const ToDo = () => {
  const [tasks, setNewTask] = useState(defaultTasks);

  const addTask = (newTask) => {
    let taskItem = {
      "task": newTask,
      "id": uuidv4()
    };
    setNewTask([...tasks, taskItem]);
  };

  const deleteTask = (id) => {
    setNewTask(tasks.filter(task => {
     return id != task.id
    }));
  };

  const clearTasks = () => {
    setNewTask([]);
  };

  const resetTasks = () => {
    setNewTask(defaultTasks);
  };


  return (
    <>
      <section className="todo-component">
        <h2>My "to do" list</h2>
        <article className="to_do">
          <Form addTask={addTask} />
          <ControlButtons clearTasks={clearTasks} resetTasks={resetTasks}/>
          <List deleteTask={deleteTask} tasks={tasks} />
        </article>
      </section>
    </>
  );
};

export default ToDo;
