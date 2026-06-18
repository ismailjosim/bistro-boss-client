import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../utils/ErrorPage';
import OurMenu from '../Pages/OurMenu';
import Shop from '../Pages/Shop';
import Dashboard from '../Layouts/Dashboard';
import Reservation from '../Pages/Dashboard/User/Reservation';
import PaymentHistory from '../Pages/Dashboard/User/PaymentHistory';
import MyCart from '../Pages/Dashboard/User/MyCart';
import AddReview from '../Pages/Dashboard/User/AddReview';
import MyBooking from '../Pages/Dashboard/User/MyBooking';
import PrivateRoutes from '../Private/PrivateRoutes';
import AddItems from '../Pages/Dashboard/Admin/AddItems';
import ManageItems from '../Pages/Dashboard/Admin/ManageItems';
import ManageBookings from '../Pages/Dashboard/Admin/ManageBookings';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers';
import AdminRoutes from '../Private/AdminRoutes';
import Payment from '../Pages/Dashboard/User/Payment';
import AdminHome from '../Pages/Dashboard/Admin/AdminHome';
import UserHome from '../Pages/Dashboard/User/UserHome';
import {
  CustomerProfile,
  CustomersLoyalty,
  DeliveryManagement,
  IntelligenceFeedback,
  KitchenBoard,
  MenuInventory,
  NotificationsReports,
  OperationsCenter,
  PlatformAdmin,
  StaffManagement,
} from '../Pages/Dashboard/DineOS/WorkspaceShell';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <OurMenu />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/:category',
        element: <Shop />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: 'userhome',
        element: <UserHome />,
      },
      {
        path: 'profile',
        element: <CustomerProfile />,
      },
      {
        path: 'tracking',
        element: <CustomerProfile />,
      },
      {
        path: 'reservation',
        element: <Reservation />,
      },
      {
        path: 'history',
        element: <PaymentHistory />,
      },
      {
        path: 'cart',
        element: <MyCart />,
      },
      {
        path: 'review',
        element: <AddReview />,
      },
      {
        path: 'booking',
        element: <MyBooking />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },

      // Admin routes

      {
        path: 'adminhome',
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: 'operations',
        element: (
          <AdminRoutes>
            <OperationsCenter />
          </AdminRoutes>
        ),
      },
      {
        path: 'kitchen',
        element: (
          <AdminRoutes>
            <KitchenBoard />
          </AdminRoutes>
        ),
      },
      {
        path: 'menu-inventory',
        element: (
          <AdminRoutes>
            <MenuInventory />
          </AdminRoutes>
        ),
      },
      {
        path: 'customers-loyalty',
        element: (
          <AdminRoutes>
            <CustomersLoyalty />
          </AdminRoutes>
        ),
      },
      {
        path: 'staff',
        element: (
          <AdminRoutes>
            <StaffManagement />
          </AdminRoutes>
        ),
      },
      {
        path: 'delivery',
        element: (
          <AdminRoutes>
            <DeliveryManagement />
          </AdminRoutes>
        ),
      },
      {
        path: 'intelligence',
        element: (
          <AdminRoutes>
            <IntelligenceFeedback />
          </AdminRoutes>
        ),
      },
      {
        path: 'reports',
        element: (
          <AdminRoutes>
            <NotificationsReports />
          </AdminRoutes>
        ),
      },
      {
        path: 'platform',
        element: (
          <AdminRoutes>
            <PlatformAdmin />
          </AdminRoutes>
        ),
      },
      {
        path: 'additems',
        element: (
          <AdminRoutes>
            <AddItems />
          </AdminRoutes>
        ),
      },
      {
        path: 'manageitems',
        element: (
          <AdminRoutes>
            <ManageItems />
          </AdminRoutes>
        ),
      },
      {
        path: 'managebooking',
        element: (
          <AdminRoutes>
            <ManageBookings />
          </AdminRoutes>
        ),
      },

      {
        path: 'allusers',
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
