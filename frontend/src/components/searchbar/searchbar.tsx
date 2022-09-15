import { SearchSection, StyledSearchbar } from './styles';
import React, { FC, useState } from 'react';
import { Button } from '@mui/material';

interface Props {
    setSearch: (search: string) => void;
}

export const Searchbar: FC = () => {
    let [input, setInput] = useState("");
    
    let onSubmit = () =>{
             
    }
    return (
        <SearchSection>
        <StyledSearchbar fullWidth label="Search" id="fullWidth" onChange={(input) => setInput(input.target.value)} />
        <Button variant='contained' onSubmit={onSubmit}>Search</Button>
        </SearchSection>
    );
};