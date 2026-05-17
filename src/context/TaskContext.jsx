import React, { createContext, useState } from "react";
//Create TaskProvider as global state within TaskContext.jsx.
//Implement toggleComplete function within TaskContext.jsx.
//Ensure toggleComplete function edits both the db.json and page.
//Call toggleComplete upon clicking task button.
/*ubmit tasks
Apply useId on form input.
Implement addTask function within TaskContext.jsx.
Call addTask within submit.
Implement search functionality
Implement useRef on search input.
Implement filter task context on TaskList.*/ 
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
}
