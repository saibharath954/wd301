import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string; // Add `title` to the state interface
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "", // Initialize `title` in the state
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask: TaskItem = {
      title: this.state.title, // Use the `title` from the state
    };
    this.props.addTask(newTask); // Call the `addTask` function passed via props
    this.setState({ title: "" }); // Clear the input field
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value }); // Update the state with the input value
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input
            type="text"
            value={this.state.title} // Controlled component
            onChange={this.titleChanged}
          />
          <button type="submit">Add item</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
