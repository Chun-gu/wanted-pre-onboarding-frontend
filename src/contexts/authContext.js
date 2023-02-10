import { createContext, useReducer } from 'react';

import { authReducer } from '../reducers';

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

const initialState = { isSignIn: false, token: '' };

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}
