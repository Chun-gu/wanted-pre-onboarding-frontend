import { NavLink } from 'react-router-dom';

export function Header() {
  const pages = ['signup', 'signin', 'todo'];

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
    </header>
  );
}
