import { NavLink } from 'react-router-dom';
import { AUTH_ACTION } from '../constants';
import { useAuth } from '../hooks';

export function Header() {
  const pages = ['signup', 'signin', 'todo'];
  const [{ isSignIn }, dispatch] = useAuth();

  function signOut() {
    localStorage.removeItem('token');
    dispatch({ type: AUTH_ACTION.signOut });
  }

  return (
    <header className="header">
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <NavLink
                to={page}
                className={({ isActive }) =>
                  isActive ? 'current-path' : undefined
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {isSignIn && (
        <button type="button" onClick={signOut}>
          signout
        </button>
      )}
    </header>
  );
}
