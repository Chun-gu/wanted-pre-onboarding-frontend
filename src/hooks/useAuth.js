import { useContext } from 'react';

import { AuthStateContext, AuthDispatchContext } from '../contexts/authContext';

export default function useAuth() {
  const authStateContext = useContext(AuthStateContext);
  const authDispatchContext = useContext(AuthDispatchContext);

  if (authStateContext === undefined)
    return new Error(
      'authStateContext는 AuthStateContext.Provider 내부에서 사용해야 합니다.'
    );

  if (authDispatchContext === undefined)
    return new Error(
      'authDispatchContext는 AuthDispatchContext.Provider 내부에서 사용해야 합니다.'
    );

  return [authStateContext, authDispatchContext];
}
