import { useRef, useState } from 'react';

import { updateTodo, deleteTodo } from '../apis';

export default function TodoItem({ id, todo, isCompleted }) {
  const [isModifyMode, setIsModifyMode] = useState();
  const modifiedTodoRef = useRef(null);
  const completeTodoRef = useRef(null);

  async function handleTodoComplete() {
    const { error } = await updateTodo(id, todo, !isCompleted);

    if (error) {
      alert(error.message);
      completeTodoRef.current.checked = isCompleted;
    }
  }

  function handleModifyMode() {
    setIsModifyMode((isModifyMode) => !isModifyMode);
  }

  async function handleTodoModify() {
    const modifiedTodo = modifiedTodoRef.current.value;

    if (!modifiedTodo) return;

    const { data, error } = await updateTodo(id, modifiedTodo, isCompleted);

    if (data) setIsModifyMode(false);
    else if (error) alert(error.message);
  }

  async function handleTodoDelete() {
    const { error } = await deleteTodo(id);

    if (error) alert(error.message);
  }

  return (
    <li>
      {isModifyMode ? (
        <>
          <input type="text" ref={modifiedTodoRef} data-testid="modify-input" />
          <button onClick={handleTodoModify} data-testid="submit-button">
            제출
          </button>
          <button onClick={handleModifyMode} data-testid="cancel-button">
            취소
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              ref={completeTodoRef}
              defaultChecked={isCompleted}
              onChange={handleTodoComplete}
            />
            <span>{todo}</span>
          </label>
          <button onClick={handleModifyMode} data-testid="modify-button">
            수정
          </button>
          <button data-testid="delete-button" onClick={handleTodoDelete}>
            삭제
          </button>
        </>
      )}
    </li>
  );
}
