import './App.css';
import React, { useState } from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodo] = useState([{ rowNumber: 1, rowDescription: "Feed Puppy", rowAssigned: "User One" },
  { rowNumber: 2, rowDescription: "Get Haircut", rowAssigned: "User Two" },
  { rowNumber: 3, rowDescription: "Go to Gym", rowAssigned: "User One" }]);

  const addToDo = (description, assigned) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = { rowNumber: rowNumber, rowDescription: description, rowAssigned: assigned };
    setTodo(t => [...t, newTodo]);

  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      console.log('row number from delete function', value.rowNumber);
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodo(filtered);
  }

  return (
    <div className="mt-5 container" >
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos}
            deleteTodo={deleteTodo} />
          <button className="btn btn-primary" onClick={addToDo}>Add Todo</button>
        </div>
      </div>
      <NewTodoForm addToDo={addToDo} />
    </div>
  );
}

export default App;
