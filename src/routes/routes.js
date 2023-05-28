import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../utils/ErrorPage';
import OurMenu from '../Pages/OurMenu';
import Shop from '../Pages/Shop';

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
            {
                path: '/mytoys',
                element: <h3>My Toys page</h3>
            },
            {
                path: '/addtoy',
                element: <h3>Add A Toy</h3>
            },
            {
                path: "/toy/:id",
                element: <h3>Add A element</h3>
            }
        ]
    }
])
