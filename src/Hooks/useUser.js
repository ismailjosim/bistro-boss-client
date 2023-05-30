import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'



const useUser = () => {
    const { user } = useAuth();
    const { isLoading, isError, data: users = [], error, refetch } = useQuery(['users', user?.email], {
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            // const res = await fetch(`https://bistro-boss-server-git-main-ismailjosim.vercel.app/carts?email=${ user }`);
            return res.json();
        },
    });

    return { users, isError, isLoading, error, refetch }; // Return refetch as part of the object

};

export default useUser;
