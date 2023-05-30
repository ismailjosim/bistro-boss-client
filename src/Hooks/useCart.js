import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query'



const useCart = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, isError, data: cart = [], error, refetch } = useQuery(['carts', user?.email], {
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${ user?.email }`);
            // const res = await fetch(`https://bistro-boss-server-git-main-ismailjosim.vercel.app/carts?email=${ user?.email }`);
            return res.json();
        },
    });

    return { cart, isError, isLoading, error, refetch }; // Return refetch as part of the object

};

export default useCart;
