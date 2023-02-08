import { useContext } from 'react';

import { TodoStateContext, TodoDispatchContext } from '../contexts';

export default function useTodo() {
  const todoState = useContext(TodoStateContext);
  const todoDispatch = useContext(TodoDispatchContext);

  if (todoState === undefined)
    throw new Error(
      'todoStateContext는 TodoStateContext.Provider 내부에서 사용해야 합니다.'
    );

  if (todoDispatch === undefined)
    throw new Error(
      'todoDispatchContext TodoDispatchContext.Provider 내부에서 사용해야 합니다.'
    );

  return [todoState, todoDispatch];
}
