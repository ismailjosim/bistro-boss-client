import { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [progress, setProgress] = useState(0);

    // fetch data
    useEffect(() => {
        setLoading(true)
        fetch('https://bistro-boss-server-sigma.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMenu(data);
            })
            .catch(err => {
                setError(err.message)
            })
    }, []);

    // calculate Progress for loading state
    useEffect(() => {
        const interval = setInterval(() => {
            if (loading) {
                setProgress(prevProgress => (prevProgress + 10) % 100);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [loading]);


    return [menu, loading, error, progress]

};

export default useMenu;
