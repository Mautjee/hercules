import { idID } from '@mui/material/locale';
import axios from 'axios';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import { User, isAttending } from '../../types';
import { api } from './config';

export const useGetUsers = () => {

    return useQuery<User[]>(
        ["users"],
        async () => (await api.get<User[]>("/users")).data,
        {
            initialData: [],
        });

};

// const { data: user } = useQuery<User>(
//     "todos",
//     async (id) => (await api.get<User>(`/users/${id}`, id)).data,
// );

// export const updateUser = (id: number, updateUser: isAttending) => {
//     api.put(`/users/${id}`).then(res => res.data);
// }
export const useLimitUser = () => {

    return useQuery<User[]>(
        ["limitUser"],
        async () => (await api.get<{ list: User[] }>(`/users/limit/30`)).data.list,
        {
            initialData: [],
        });

};
export const apiSearchUser = async (query: String) => {
    const q = { params: { query: query } }
    return await api.get<{ result: User[] }>(`/users/search/`, q);
}
export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (id: number) => api.put(`/users/attending/${id}`), {
        onSettled: () => queryClient.invalidateQueries("users")
    })
}