import React, { useContext,useState } from "react";
import { TaskContext } from "../context/TaskContext";
/*ubmit tasks
Apply useId on form input.
Implement addTask function within TaskContext.jsx.
Call addTask within submit.
Implement search functionality
Implement useRef on search input.
Implement filter task context on TaskList. */
function TaskList({query}) {
    const { tasks, toggleComplete } = useContext(TaskContext);
    const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button data-testid={task.id} onClick={() => toggleComplete(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
