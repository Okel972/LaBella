import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export function AppProvider({ children }) {
  return <Router>{children}</Router>;
}
