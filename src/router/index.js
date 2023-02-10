import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProtectedRoute } from '../components';
import {
  ErrorPage,
  RootPage,
  SignInPage,
  SignUpPage,
  TodoPage,
} from '../pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      children: [
        {
          path: 'signup',
          element: (
            <ProtectedRoute redirect={'/todo'} needSignIn={false}>
              <SignUpPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'signin',
          element: (
            <ProtectedRoute redirect={'/todo'} needSignIn={false}>
              <SignInPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'todo',
          element: (
            <ProtectedRoute redirect={'/signin'} needSignIn={true}>
              <TodoPage />
            </ProtectedRoute>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
