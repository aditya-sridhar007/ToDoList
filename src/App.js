import React from "react";
import "./App.css";
// import "./Components/ToDoItem";
import ToDoItem from "./Components/ToDoItem";
import "./Components/Styles.css";
import ToDosData from "./Components/ToDosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ToDos: ToDosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedToDos = prevState.ToDos.map((ToDo) => {
        if (ToDo.id === id) {
          return {
            ...ToDo,
            completed: !ToDo.completed,
          };
        }
        return ToDo;
      });
      return {
        ToDos: updatedToDos,
      };
    });
  }

  render() {
    const ToDoTasks = this.state.ToDos.map((item) => (
      <ToDoItem key={item.id} task={item} handleChange={this.handleChange} />
    ));

    return <div className="to-do-list">{ToDoTasks}</div>;
  }
}

export default App;
