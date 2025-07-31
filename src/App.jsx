import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App() {
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];
  const [tasks, setTasks] = React.useState(DATA);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  function toggleTaskCompleted(id) {
    console.log(tasks[0]);
  }

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ));
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <>
      <div className="todoapp stack-large">
        <h1>Todo App</h1>
        <Form addTask={addTask} />

        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </>
  );
}

export default App;
