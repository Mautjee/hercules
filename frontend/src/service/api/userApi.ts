import axios from 'axios';
import { User, isAttending } from '../../types';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const useGetUsers = async () => {
    return await api.get<User[]>('/users/').then(res => res.data);
}

export const getUserById = (id: number) => {
    api.get(`/users/${id}`).then(res => res.data);
}

export const updateUser = (id: number, updateUser: isAttending) => {
    api.put(`/users/${id}`).then(res => res.data);
}
export const getUsersLimit = (limit: number) => {
    api.put(`/users/limit/${limit}`).then(res => res.data)
}
