import React, { FC, useEffect, useState } from 'react';
import { DashboardContainer } from './styles';
import { Searchbar, UserTable } from '../../components';
import { useQuery } from 'react-query';
import { User, UserList } from '../../types'
import { useLimitUser, apiSearchUser } from '../../service/api/userApi';
import { useDebounce } from '../../hook';


export const Dashboard: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const [searchResult, setSearchResult] = useState<User[]>([]);

    const debouncedFilter: string = useDebounce<string>(searchTerm, 500);

    const { data, isLoading, isSuccess } = useQuery(
        ['products', debouncedFilter],
        () => apiSearchUser(debouncedFilter),
        { enabled: Boolean(debouncedFilter) }
    )

    useEffect(() => {
        setSearchResult(data);

    }, [isSuccess])


    if (isLoading) return (<p>Loading the users...</p>)
    return (
        <DashboardContainer>
            <Searchbar setSearch={setSearchTerm} />
            {console.log(filterdUserList)}
            {<UserTable list={filterdUserList} />}
        </DashboardContainer>
    );
};
