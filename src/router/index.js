import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import { SignUpPage, SignInPage, TodoPage, ErrorPage } from '../pages';
import { TodoProvider } from '../contexts';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'signup', element: <SignUpPage /> },
        { path: 'signin', element: <SignInPage /> },
        {
          path: 'todo',
          element: (
            <TodoProvider>
              <TodoPage />
            </TodoProvider>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
