import TodoProvider from '../providers/TodoProvider';
import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  return (
    <TodoProvider>
      <ul>
        {todos.length === 0 ? (
          <li>할 일이 없습니다.</li>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
        )}
      </ul>
    </TodoProvider>
  );
}
