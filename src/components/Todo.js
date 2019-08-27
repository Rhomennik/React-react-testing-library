import React, { useState } from "react";

const Todo = () => {
  const [task, updateTask] = useState("");
  const [tasks, updateTasks] = useState([]);

  const handleInputChange = event => updateTask(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();

    if (task.trim()) {
      updateTasks([...tasks, task]);
      updateTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          data-testid="form-field"
          onChange={handleInputChange}
          placeholder="Type new task"
          type="text"
          value={task}
        />
        <button type="submit" data-testid="form-btn">
          Add new task
        </button>
      </form>
      <table data-testid="data-table">
        <thead>
          <tr>
            <th>Task :)</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(value => (
            <tr key={value}>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todo;
