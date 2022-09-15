import React, { FC, useEffect, useState } from 'react';
import { DashboardContainer } from './styles';
import { Searchbar, UserTable } from '../../components';
import { useQuery } from 'react-query';
import { User, UserList } from '../../types'
import { useLimitUser, useSearchUser } from '../../service/api/userApi';


export const Dashboard: FC = () => {
    const [search, setSearch] = useState('');
    const { data, isSuccess } = useLimitUser();
    const searchUser = useSearchUser(search);
    const [filterdUserList, setfilterdUserList] = useState<User[]>([])    

    useEffect(() => {
        if (isSuccess) {
            setfilterdUserList(data);
        }
    }, [])

    useEffect(() => {
        searchUser.refetch();
        if (searchUser.isSuccess) {
            setfilterdUserList(searchUser.data);
        }
    }, [search]);

    return (
        <DashboardContainer>
            <h1>Hercules leden dashboard</h1>
            <Searchbar />
            <UserTable list={filterdUserList} />
        </DashboardContainer>
    );
};
