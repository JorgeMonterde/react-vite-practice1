import React from "react";

const ControlButtons = (props) => {
  const {clearTasks, resetTasks} = props;

  const clearTasksClick = () => {
    clearTasks();
  };

  const resetTasksClick = () => {
    resetTasks();
  };


  return <div className="control-buttons">
    <button className="all-tasks-button" onClick={clearTasksClick}>Clear tasks</button>
    <button className="all-tasks-button" onClick={resetTasksClick}>Reset tasks</button>
  </div>;
};

export default ControlButtons;
