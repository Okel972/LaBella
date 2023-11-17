import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from './features/Home';
import { Carte } from './features/Carte';
import { Contact } from './features/Contact';
export const MainRoutes = ({ isLoading, account }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="carte" element={<Carte />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
);
