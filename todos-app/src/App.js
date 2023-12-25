import './App.css';
import React, { useState } from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodo] = useState([{ rowNumber: 1, rowDescription: "Feed Puppy", rowAssigned: "User One" },
  { rowNumber: 2, rowDescription: "Get Haircut", rowAssigned: "User Two" },
  { rowNumber: 3, rowDescription: "Go to Gym", rowAssigned: "User One" }]);

  const addToDo = (description, assigned) => {
    if (todos.length > 0) {
      const newTodo = { rowNumber: todos.length + 1, rowDescription: description, rowAssigned: assigned };
      setTodo(t => [...t, newTodo]);
    }

  }
  return (
    <div className="mt-5 container" >
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addToDo}>Add Todo</button>
        </div>
      </div>
      <NewTodoForm addToDo={addToDo} />
    </div>
  );
}

export default App;
