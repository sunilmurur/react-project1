// ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

export default function ProtectedRoute  ({ children, allowedRoles }) {
  const { user } = useAuth();
//  console.log(user)
  if (!user || !user.token) {
    console.log(user)
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
