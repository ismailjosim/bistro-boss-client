import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useMenu = () => {
    const [axiosSecure] = useAxiosSecure();

    // Fetch data with axios api
    const { isLoading, data: menu = [], isError, error, refetch } = useQuery(['menu'], {
        queryFn: async () => {
            const res = await axiosSecure('/menu');
            return res.data;
        },
    })

    return [menu, refetch, isError, error, isLoading]

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
//     fetch(`${ process.env.REACT_APP_SERVER_URL }/menu')
//         .then(res => res.json())
//         .then(data => {
//             setLoading(false)
//             setMenu(data);
//         })
//         .catch(err => {
//             setError(err.message)
//         })
// }, []);
