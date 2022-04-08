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
        async () => (await api.get<User[]>(`/users/limit/30`)).data,
        {
            initialData: [],
        });

};
export const useSearchUser = (query: String) => {
    const q = { params: { query: query } }
    return useQuery<User[]>(
        ["search", query], async () => (await api.get<User[]>(`/users/search/`, q)).data,
        {
            initialData: [],
        });
}
export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (id: number) => api.put(`/users/attending/${id}`), {
        onSettled: () => queryClient.invalidateQueries("users")
    })
}