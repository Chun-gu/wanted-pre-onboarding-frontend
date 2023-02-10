import { Outlet } from 'react-router-dom';

import { Layout } from '../components';

export default function RootPage() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
