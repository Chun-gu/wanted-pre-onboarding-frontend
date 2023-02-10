import { ACTION, AUTH_ACTION } from '../constants';

export default function authReducer(prevAuth, { type, token }) {
  switch (type) {
    case AUTH_ACTION.signIn: {
      return { ...prevAuth, isSignIn: true, token };
    }
    case AUTH_ACTION.signOut: {
      return { ...prevAuth, isSignIn: false, token: '' };
    }
    default: {
      throw new Error(ACTION.notExist(type));
    }
  }
}
