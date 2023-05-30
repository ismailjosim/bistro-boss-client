import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query'



const useUser = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, isError, data: users = [], error, refetch } = useQuery(['users', user?.email], {
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            // const res = await fetch(`https://bistro-boss-server-git-main-ismailjosim.vercel.app/carts?email=${ user?.email }`);
            return res.json();
        },
    });

    return { users, isError, isLoading, error, refetch }; // Return refetch as part of the object

};

export default useUser;
