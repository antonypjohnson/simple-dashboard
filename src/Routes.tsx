import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from 'react-router-dom';
import { DashboardPageLayout } from '@components/Layouts/DashboardPageLayout';
import { PageNotFound } from '@pages/404/404';
import { Dashboard } from '@pages/dashboard/dashboard';
import { Users } from '@pages/users/users';
import { Teams } from '@pages/teams/teams';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <DashboardPageLayout>
            <Outlet />
          </DashboardPageLayout>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
      </Route>

      <Route>
        <Route path="404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Route>,
  ),
);

export default router;
