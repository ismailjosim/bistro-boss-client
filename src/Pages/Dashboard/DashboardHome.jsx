import useAuth from '../../Hooks/useAuth';
import useAdmin from '../../Hooks/useAdmin';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome';

const DashboardHome = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();


    return (
        <section>
            { user && isAdmin ? <AdminHome /> : <UserHome /> }
        </section>
    );
};

export default DashboardHome;
