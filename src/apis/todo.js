import api from './config';

export async function getTodos() {
  return await api.get('/todos');
}

export async function createTodo(todo) {
  return await api.post('/todos', { todo });
}

export async function updateTodo(id, todo, isCompleted) {
  return await api.put(`/todos/${id}`, { todo, isCompleted });
}

export async function deleteTodo(id) {
  return await api.delete(`/todos/${id}`);
}
