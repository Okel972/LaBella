import React, { useEffect } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import { Home } from '../features/Home';
import { Layout } from '../components/Layout';
import { Contact } from '../features/Contact';
import { Carte } from '../features/Carte';
import { Connect } from '../features/Connect';
import { Subscribe } from '../features/Subscribe';

export function AppRoutes() {
  const navigate = useNavigate();
  const isRootPath = window.location.pathname === '/';

  useEffect(() => {
    if (isRootPath) {
      navigate('/home');
    }
  }, [isRootPath, navigate]);

  const commonRoutes = [
    {
      element: <Layout />,
      path: '/',
      children: [
        { element: <Home />, path: '/home', index: true },
        { element: <Contact />, path: '/contact' },
        { element: <Carte />, path: '/carte' },
        { element: <Connect />, path: '/connect' },
        { element: <Subscribe />, path: '/subscribe' },
        {
          element: <div>404</div>,
          path: '*',
        },
      ],
    },
  ];

  const element = useRoutes(commonRoutes);

  return element;
}
