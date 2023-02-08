import { useEffect } from 'react';

import { getTodos } from '../apis';
import { TODO_ACTION } from '../constants';
import { useTodo } from '../hooks';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, dispatch] = useTodo();

  useEffect(() => {
    (async () => {
      const { data, error } = await getTodos();

      if (data) {
        dispatch({ type: TODO_ACTION.init, newTodo: data });
      } else if (error) alert(error.message);
    })();
  }, [dispatch]);

  return (
    <ul>
      {todos.length === 0 ? (
        <li>할 일이 없습니다.</li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      )}
    </ul>
  );
}
