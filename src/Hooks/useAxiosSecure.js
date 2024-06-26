import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth';

// here we keep axiosSecure outside of the function so that i can create any instances.
const axiosSecure = axios.create({
  baseURL: `${ process.env.REACT_APP_SERVER_URL }`
})

const useAxiosSecure = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate()


  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${ token }`
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await userLogout();
          navigate('/login')
        }
        return Promise.reject(error)
      }
    )

  }, [userLogout, navigate])



  return [axiosSecure]


};

export default useAxiosSecure;


// TODO: Using Normal fetch
// const fetchData = async () => {
//   try {
//     const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('access-token')}`,
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       // Process the data here
//     } else if (response.status === 401 || response.status === 403) {
//       await userLogout();
//       navigate('/login');
//     } else {
//       throw new Error('Request failed.');
//     }
//   } catch (error) {
//     // Handle errors here
//   }
// };


