import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todo);

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className='todo'>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
