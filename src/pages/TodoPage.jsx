import { TodoForm, TodoList } from '../components';
import { TodoProvider } from '../contexts';

export default function TodoPage() {
  return (
    <>
      <h1>할 일 목록</h1>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </>
  );
}
