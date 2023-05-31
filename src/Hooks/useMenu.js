import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useMenu = () => {
    const [progress, setProgress] = useState(0);
    const [axiosSecure] = useAxiosSecure();

    // Fetch data with axios api
    const { isLoading, data: menu = [], error, refetch } = useQuery(['menu'], {
        queryFn: async () => {
            const res = await axiosSecure('/menu');
            return res.data;
        },

    })

    // Calculate progress for loading state
    useEffect(() => {
        let interval;
        if (isLoading) {
            interval = setInterval(() => {
                setProgress(prevProgress => (prevProgress + 1) % 100);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isLoading]);

    return [menu, error, progress, isLoading, refetch]

};

export default useMenu;

// const [menu, setMenu] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null)
// const [progress, setProgress] = useState(0);

// fetch data
// useEffect(() => {
//     setLoading(true)
//     // fetch('https://bistro-boss-server-git-main-ismailjosim.vercel.app/menu')
//     fetch('http://localhost:5000/menu')
//         .then(res => res.json())
//         .then(data => {
//             setLoading(false)
//             setMenu(data);
//         })
//         .catch(err => {
//             setError(err.message)
//         })
// }, []);
