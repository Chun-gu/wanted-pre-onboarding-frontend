import { useEffect, useState } from 'react';
import axios from 'axios';
import { TodoItem } from '../components';

export default function Todo() {
  const [todos, setTodos] = useState();

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
      <form>
        <label htmlFor="todo">할 일 작성</label>
        <input type="text" id="todo" />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
