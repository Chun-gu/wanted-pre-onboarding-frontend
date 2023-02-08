import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import { SignUpPage, SignInPage, TodoPage, ErrorPage } from '../pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'signup', element: <SignUpPage /> },
        { path: 'signin', element: <SignInPage /> },
        { path: 'todo', element: <TodoPage /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
