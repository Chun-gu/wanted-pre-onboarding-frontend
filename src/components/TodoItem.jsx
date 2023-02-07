import { useRef, useState } from 'react';
import axios from 'axios';

export default function TodoItem({ id, todo, isCompleted }) {
  const [isModifyMode, setIsModifyMode] = useState();
  const modifiedTodoRef = useRef(null);

  function updateTodo(todo, isCompleted) {
    const token = localStorage.getItem('jwt');

    axios.put(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      { todo, isCompleted },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  function handleTodoComplete() {
    updateTodo(todo, !isCompleted);
  }

  function handleModifyMode() {
    setIsModifyMode((isModifyMode) => !isModifyMode);
  }

  function handleTodoModify() {
    const modifiedTodo = modifiedTodoRef?.current.value;

    updateTodo(modifiedTodo, isCompleted);
  }

  function handleTodoDelete() {
    const token = localStorage.getItem('jwt');

    axios.delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
