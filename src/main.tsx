import React from 'react';

import ReactDOM from 'react-dom/client';
import { ScrollRestoration } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';

import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Spinner from './components/layout/Spinner/Spinner';

import Blog from './Pages/Blog';
import Landing from './Pages/Landing';
import ProjectsPage from './Pages/ProjectsPage';
import ResumePage from './Pages/ResumePage';
import TouchpointPage from './Pages/projects/TouchpointPage';
import UdcPage from './Pages/projects/UdcPage';
import Unichem from './Pages/projects/Unichem';
import WatoPage from './Pages/projects/Wato';
import IagPage from './Pages/projects/IagPage';

import './index.scss';

const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Landing />} />
      <Route path="blog" element={<Blog />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="projects/touchpoint" element={<TouchpointPage />} />
      <Route path="projects/udc" element={<UdcPage />} />
      <Route path="projects/unichem" element={<Unichem />} />
      <Route path="projects/wato" element={<WatoPage />} />
      <Route path="projects/iag" element={<IagPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider fallbackElement={<Spinner />} router={router} />
  </React.StrictMode>
);
