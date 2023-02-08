import { useRef } from 'react';

import { createTodo } from '../apis';
import { TodoList } from '../components';
import { TODO_ACTION } from '../constants';
import { useTodo } from '../hooks';

export default function TodoPage() {
  const [, dispatch] = useTodo();
  const todoInputRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const todo = todoInputRef.current.value;

    if (!todo) return;

    const { data, error } = await createTodo(todo);

    if (data) {
      dispatch({ type: TODO_ACTION.create, newTodo: data });
      todoInputRef.current.value = '';
    } else if (error) {
      alert(error.message);
    }
  }

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
      <TodoList />
    </>
  );
}
