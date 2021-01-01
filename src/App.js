import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <container>
    <div className="App m-5">
      <h1>TODO APP</h1>
      <TodoInput />
      <TodoList />
    </div>
    </container>
  );
}

export default App;
