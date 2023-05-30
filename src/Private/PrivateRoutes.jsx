import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../Hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = UseAuth()

    if (loading) {
        return (
            <div className='flex justify-center items-center gap-3 flex-col'>
                <div className="w-24 h-24 mb-10 border-4 border-dashed rounded-full animate-spin border-primary">
                </div>
            </div>
        )
    }

    return (
        user ? <div>{ children }</div> : <Navigate to={ '/login' } state={ { from: location } } replace />
    );
};

export default PrivateRoutes;
