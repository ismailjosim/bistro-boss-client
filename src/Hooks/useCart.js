import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';



const useCart = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, isError, data: cart = [], error, refetch } = useQuery(['carts', user?.email], {
        queryFn: async () => {
            if (!loading && user?.email) {
                const res = await axiosSecure(`/carts?email=${ user?.email }`);
                return res.data;
            }
        },
        enabled: !loading && !!user?.email // Enable the query only when not loading and user email is available
    });

    return { cart, isError, isLoading, error, refetch }; // Return refetch as part of the object

};

export default useCart;
