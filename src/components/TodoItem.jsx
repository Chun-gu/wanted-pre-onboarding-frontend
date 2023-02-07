import { useState } from 'react';
import axios from 'axios';

export default function TodoItem({ id, todo, isCompleted }) {
  const [isModifyMode, setIsModifyMode] = useState();

  function handleInput() {
    const token = localStorage.getItem('jwt');
    axios.put(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      { todo, isCompleted: !isCompleted },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  function handleModifyMode() {
    setIsModifyMode((isModifyMode) => !isModifyMode);
  }

  return (
    <li>
      {isModifyMode ? (
        <>
          <input type="text" data-testid="modify-input" />
          <button onClick={handleModifyMode} data-testid="submit-button">
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
              onChange={handleInput}
            />
            <span>{todo}</span>
          </label>
          <button onClick={handleModifyMode} data-testid="modify-button">
            수정
          </button>
          <button data-testid="delete-button">삭제</button>
        </>
      )}
    </li>
  );
}
