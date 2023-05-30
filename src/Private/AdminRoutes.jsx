import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';

const AdminRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return (
            <div className='flex justify-center items-center gap-3 flex-col'>
                <div className="w-24 h-24 mb-10 border-4 border-dashed rounded-full animate-spin border-primary">
                </div>
            </div>
        )
    }

    return (
        user && isAdmin ? <div>{ children }</div> : <Navigate to={ '/login' } state={ { from: location } } replace />
    );
};

export default AdminRoutes;
