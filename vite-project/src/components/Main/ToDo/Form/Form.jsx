import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';



const Form = (props) => {
  const text = {"taskText": "", "id": ""}

  const [taskText, setTaskText] = useState(text);
  const [timeoutId, setTimeoutId] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const {addTask} = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTask = event.target.newTask.value;
    event.target.newTask.value = "";
    addTask(newTask);
    
  };

  const inputHandleChange = (event) => {
    event.preventDefault();
    let incomingTask = event.target.value;
    console.log(incomingTask);
    const uuid = uuidv4();
    setTaskText({"taskText": incomingTask, "id": uuid});

    if(!timeoutId){
      event.target.newTask.value = "";
    }
  };

  useEffect(() => {
    //Clears input and state if has passed 20s without writting anything
    let prevTimerId = timeoutId;
    clearTimeout(prevTimerId)
    let timerId = setTimeout(() => {
      setTaskText({"taskText":"", "id": ""});
      setTimeoutId("")
    }, 5000);
    setTimeoutId(timerId)
  }, [taskText]);

  useEffect(() => {
    //Error message if input has less than 6 characters
    if (taskText.taskText.length < 6){
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
    
  }, [taskText]);

  const printErrorMessage = () => {
    return JSON.stringify("Message need to be at least 6 characters long.");
  };

  const printAddButton = () => {
    if (taskText.taskText){
      return <input type="submit" value="ADD" />;
    }
  }
  


  
  return (
  <form className="add-task-form" onSubmit={handleSubmit}>
    <p>{errorMessage? printErrorMessage() : ""}</p>
    <input type="text" name="newTask" id="newTask" placeholder="New task" onChange={inputHandleChange}/>
    {printAddButton()}
  </form>
  );
};

export default Form;
