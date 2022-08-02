import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export const renderRoutes = (route) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {
        routes.map((route, i) => {
          const RouteElement = route.element;
          const RouteLayout = route.layout || React.Fragment

          return (
            <Route key={i} path={route.path}
              element={
                <RouteLayout>
                  <RouteElement />
                </RouteLayout>
              }
            />
          )
        })
      }
    </Routes>
  </React.Suspense>
);


export const routes = [
  // define [home / 404]
  {
    path: '/home',
    layout: React.lazy(() => import('src/layouts/DashboardLayout')),
    element: React.lazy(() => import('src/views/home/HomeView')),
  },
  {
    path: '/404',
    element: React.lazy(() => import('src/views/errors/NotFoundView')),
  },
  // customize  routes



  // define [redirect(=Navigate )]
  {
    path: "/",
    element: () => <Navigate replace to="/home" />
  },
  {
    path: "/*",
    element: () => <Navigate replace to="/404" />
  }
];