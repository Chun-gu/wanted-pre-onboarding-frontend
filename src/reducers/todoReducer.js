import { ACTION, TODO_ACTION } from '../constants';

export default function todoReducer(prevTodos, { type, newTodo }) {
  switch (type) {
    case TODO_ACTION.init: {
      return [...newTodo];
    }
    case TODO_ACTION.create: {
      return [...prevTodos, newTodo];
    }
    case TODO_ACTION.update: {
      return prevTodos.map((prevTodo) =>
        prevTodo.id === newTodo.id
          ? {
              ...prevTodo,
              todo: newTodo.todo,
              isCompleted: newTodo.isCompleted,
            }
          : prevTodo
      );
    }
    case TODO_ACTION.delete: {
      return prevTodos.filter((prevTodo) => prevTodo.id !== newTodo.id);
    }
    default: {
      throw new Error(ACTION.notExist(type));
    }
  }
}
