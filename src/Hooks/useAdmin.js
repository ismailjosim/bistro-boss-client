import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useAdmin = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
<<<<<<< HEAD
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
=======
        enabled:
            !loading && !!user?.email && !!localStorage.getItem('access-token'),
>>>>>>> 238f3646e0f7c316bdf0f3b8e05ac17a2fc8693b
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/users/admin/${ user.email }`)
                return res.data.admin
            }
        },
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin
