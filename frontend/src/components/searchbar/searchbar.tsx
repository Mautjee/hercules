import { StyledSearchbar } from './styles';
import React, { FC } from 'react';

interface Props {
    setSearch: (search: string) => void;
}

export const Searchbar: FC<Props> = ({ setSearch }) => {

    return (
        <StyledSearchbar fullWidth label="Search" id="fullWidth" onChange={(input) => setSearch(input.target.value)} />
    );
};