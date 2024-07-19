import React, { useState } from 'react';

const Todo = () => {
  const [todoText, setTodoText] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const [todos, setTodos] = useState({
    dueLater: [],
    dueToday: [],
    overDue: []
  });

  const addTodo = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const newTodo = { text: todoText, date: todoDate, id: Date.now(), isComplete: false };

    let category = '';
    if (todoDate > currentDate) category = 'dueLater';
    else if (todoDate === currentDate) category = 'dueToday';
    else category = 'overDue';

    setTodos((prevTodos) => ({
      ...prevTodos,
      [category]: [...prevTodos[category], newTodo]
    }));

    // Clear the input fields after adding a todo
    setTodoText('');
    setTodoDate('');
  };

  const deleteTodo = (id, category) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [category]: prevTodos[category].filter(todo => todo.id !== id)
    }));
  };

  const toggleComplete = (id, category) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [category]: prevTodos[category].map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    }));
  };

  return (
    <div className='csl'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Log out</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="todo">
        <h2>Your To-Do's</h2>

        <div className="add-todo">
          <input
            type="text"
            placeholder="Add your Todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
          <button onClick={addTodo}>ADD</button>
        </div>

        <div className="todo-container">
          <div className="todo-section">
            <h3>Due Later</h3>
            <ul>
              {todos.dueLater.map((todo) => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleComplete(todo.id, 'dueLater')}
                  />
                  {todo.text}
                  <div>
                   <button className='del' onClick={() => deleteTodo(todo.id,'dueLater')}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="todo-section">
            <h3>Due Today</h3>
            <ul>
              {todos.dueToday.map((todo) => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleComplete(todo.id, 'dueToday')}
                  />
                  {todo.text}
                  <button className='del' onClick={() => deleteTodo(todo.id, 'dueToday')}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="todo-section">
            <h3>Over Due</h3>
            <ul>
              {todos.overDue.map((todo) => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleComplete(todo.id, 'overDue')}
                  />
                  {todo.text}
                  <button className='del' onClick={() => deleteTodo(todo.id, 'overDue')}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
