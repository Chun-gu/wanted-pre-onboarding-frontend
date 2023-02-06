import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import { Signup, Signin, Todo, ErrorPage } from '../pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'signup', element: <Signup /> },
        { path: 'signin', element: <Signin /> },
        { path: 'todo', element: <Todo /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
