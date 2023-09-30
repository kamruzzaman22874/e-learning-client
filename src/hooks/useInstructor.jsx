

import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import axios from 'axios';

const useInstructor = () => {
    const { user } = useAuth();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: user?.email !== "",
        // enabled: !loading,
        queryFn: async () => {
            if (user?.email) {
                const res = await axios.get(`https://high-study-server.vercel.app/users/instructor/${user?.email}`);
                return res.data.instructor;
            }
        },
    });
    return [isInstructor, isInstructorLoading];
};
export default useInstructor;