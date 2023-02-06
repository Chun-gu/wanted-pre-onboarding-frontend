import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const pages = ['signup', 'signin', 'todo'];

  return (
    <>
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
      <main>
        <Outlet />
      </main>
    </>
  );
}
