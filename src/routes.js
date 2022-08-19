import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginGuard from 'src/components/LoginGuard';
import RouterGuard from 'src/components/RouterGuard';
import DashboardLayout from 'src/layouts/DashboardLayout';


const routes = [
  {
    path: '/login',
    guard: RouterGuard,
    element: React.lazy(() => import('src/views/signIn')),
  },
  {
    path: '/memu',
    guard: LoginGuard,
    layout: DashboardLayout,
    element: React.lazy(() => import('src/views/menu')),
  },
  {
    path: '/404',
    element: React.lazy(() => import('src/views/errors/NotFoundView')),
  },
  // customize  routes
  {
    path: '/memu/companyinfo',
    guard: LoginGuard,
    layout: DashboardLayout,
    element: React.lazy(() => import('src/views/menu/CompanyInfoView')),
  },
  {
    path: '/memu/purchasemng',
    guard: LoginGuard,
    layout: DashboardLayout,
    element: React.lazy(() => import('src/views/menu/PurchaseMngView')),
  },
  {
    path: '/memu/invntmng',
    guard: LoginGuard,
    layout: DashboardLayout,
    element: React.lazy(() => import('src/views/menu/InvntMngView')),
  },
  {
    path: '/memu/salesmng',
    guard: LoginGuard,
    layout: DashboardLayout,
    element: React.lazy(() => import('src/views/menu/SalesMngView')),
  },

  {
    path: "/",
    element: () => <Navigate replace to="/memu" />
  },
  {
    path: "/*",
    element: () => <Navigate replace to="/404" />
  }
];

const RenderRoutes = () => {

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          routes.map((route, i) => {
            const RouteElement = route.element;
            const RouteLayout = route.layout || React.Fragment
            const RouteGuard = route.guard || React.Fragment;

            return (
              <Route key={i} path={route.path}
                element={
                  <RouteGuard>
                    <RouteLayout>
                      <RouteElement />
                    </RouteLayout>
                  </RouteGuard>
                }>
              </Route>
            )
          })
        }
      </Routes>
    </React.Suspense>
  );

}

export default RenderRoutes;