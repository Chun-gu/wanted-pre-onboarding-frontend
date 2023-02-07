import axios from 'axios';

export default function TodoItem({ id, todo, isCompleted }) {
  function handleInput() {
    const token = localStorage.getItem('jwt');
    axios.put(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      { todo, isCompleted: !isCompleted },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={handleInput}
        />
        <span>{todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  );
}
