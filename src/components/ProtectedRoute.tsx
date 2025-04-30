// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    console.log('ProtectedRoute props:', {});
    const user = useSelector((state: any) => state.auth.user);
    console.log('Current user state:', user);

    if (!user) {
        console.log('User is not authenticated, redirecting...');
        return <Navigate to="/auth" />;
    }
    
    console.log('User is authenticated, rendering component...');
    return <Outlet />;
};

export default ProtectedRoute;
