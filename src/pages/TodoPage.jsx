import { useEffect, useRef, useState } from 'react';

import { createTodo, getTodos } from '../apis';
import { TodoList } from '../components';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const todo = todoInputRef.current.value;

    if (!todo) return;

    const { data, error } = await createTodo(todo);

    if (data) {
      todoInputRef.current.value = '';
      setTodos((prev) => [...prev, data]);
    } else if (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    (async () => {
      const { data, error } = await getTodos();

      if (data) setTodos(data);
      else if (error) alert(error.message);
    })();
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
      <TodoList todos={todos} />
    </>
  );
}
