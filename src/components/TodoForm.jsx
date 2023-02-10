import { memo, useRef } from 'react';

import { createTodo } from '../apis';
import { TODO_ACTION } from '../constants';
import { useTodo } from '../hooks';

function TodoForm() {
  const [, dispatch] = useTodo();
  const todoInputRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const todo = todoInputRef.current.value;

    if (!todo) return;

    const { isSuccess, data, error } = await createTodo(todo);

    if (isSuccess) {
      dispatch({ type: TODO_ACTION.create, newTodo: data });
      todoInputRef.current.value = '';
    } else if (error) {
      alert(error.message);
    }
  }

  return (
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
  );
}

export default memo(TodoForm);
