import React, { FC, useState } from 'react';
import { DashboardContainer } from './styles';
import { Searchbar, Table } from '../../components';
import { useQuery } from 'react-query';
import { User, UserList } from '../../types'
import * as api from '../../service/api/userApi'

export const Dashboard: FC = () => {
    const { isLoading, isSuccess, data } = useQuery<User[]>(['users'], api.useGetUsers, {
        initialData: [],
    })
    if (isLoading) {
        return <h1>Is Loading</h1>
    }
    if (!data) {
        <h1>Something went wrong</h1>
    }
    if (isSuccess) {
        console.log('data', data)
        return (
            <DashboardContainer>
                <h1>Dashboard view</h1>
                <Searchbar></Searchbar>
                <Table users={data}></Table>
            </DashboardContainer>
        );
    }
    return (
        <></>
    )
};