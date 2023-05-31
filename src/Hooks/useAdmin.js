import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useAdmin = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();


    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({

        queryKey: ['isAdmin', user?.email],// query key দিলে সে ক্লায়েন্ট সাইডে cache করে রাখে
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${ user?.email }`)
            return res.data.admin;
        }

    })


    return [isAdmin, isAdminLoading]
}
export default useAdmin
