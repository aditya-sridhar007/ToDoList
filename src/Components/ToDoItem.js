import React from "react";
import "./Styles.css";

function ToDoItem(props) {
  const styles = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic",
  };

  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={() => props.handleChange(props.task.id)}
      />
      <p style={props.task.completed ? styles : null}> {props.task.text} </p>
      <br />
    </div>
  );
}

export default ToDoItem;
