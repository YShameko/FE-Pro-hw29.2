import './app.style.css';

import React from 'react';
import AddTodo from './components/addTodo/AddTodo.jsx';
import TodoList from './components/todoList/TodoList.jsx';
import Footer from './components/footer/Footer.jsx';

export default function App() {
  return (
    <div className="todo-app">
      <h3>TODO App with Redux</h3>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
} 
