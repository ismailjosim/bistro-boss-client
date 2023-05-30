import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../utils/ErrorPage';
import OurMenu from '../Pages/OurMenu';
import Shop from '../Pages/Shop';
import Dashboard from '../Layouts/Dashboard';
import UserHome from '../Pages/Dashboard/UserHome';
import Reservation from '../Pages/Dashboard/User/Reservation';
import PaymentHistory from '../Pages/Dashboard/User/PaymentHistory';
import MyCart from '../Pages/Dashboard/User/MyCart';
import AddReview from '../Pages/Dashboard/User/AddReview';
import MyBooking from '../Pages/Dashboard/User/MyBooking';
import PrivateRoutes from '../Private/PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <OurMenu />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/shop/:category',
                element: <Shop />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
            {
                path: '',
                element: <UserHome />
            },
            {
                path: 'home',
                element: <UserHome />
            },
            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'history',
                element: <PaymentHistory />
            },
            {
                path: 'cart',
                element: <MyCart />
            },
            {
                path: 'review',
                element: <AddReview />
            },
            {
                path: 'booking',
                element: <MyBooking />
            }
        ]
    }
])
