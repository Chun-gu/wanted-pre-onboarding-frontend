import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { TodoItem } from '../components';

export default function Todo() {
  const [todos, setTodos] = useState();
  const todoInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const todo = todoInputRef.current.value;
    if (!todo) return;

    const token = localStorage.getItem('jwt');
    axios
      .post(
        'https://pre-onboarding-selection-task.shop/todos',
        { todo },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => {
        todoInputRef.current.value = '';
        setTodos((prev) => [...prev, data]);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    async function getTodos() {
      axios
        .get('https://pre-onboarding-selection-task.shop/todos', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setTodos(response.data));
    }
    getTodos();
  }, []);

  return (
    <>
      <h1>할 일 목록</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">할 일 작성</label>
        <input
          id="todo"
          ref={todoInputRef}
          type="text"
          data-testid="new-todo-input"
        />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
