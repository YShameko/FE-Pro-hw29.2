import React from 'react';
import { useSelector } from 'react-redux';
import './footer.style.css';

function Footer() {
  const totalTodos = useSelector((state) => state.todo.length);

  return (
    <footer className='app-footer'>
      Всього: {totalTodos}
    </footer>
  );
}

export default Footer;