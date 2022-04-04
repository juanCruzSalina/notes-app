import { auth } from 'config/firebase';
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  return auth.currentUser ? <Outlet /> : <Navigate to={'/'}/>
};

export default ProtectedRoute;