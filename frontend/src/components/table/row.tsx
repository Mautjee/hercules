import React, { FC, useEffect, useState } from "react";
import { QueryClient, useMutation } from "react-query";
import { User } from '../../types';
import { useUpdateUser } from '../../service/api';
import { Button, TableCell, TableRow } from "@mui/material";
import { style } from "@mui/system";

interface Props {
    user: User,
}

export const Row: FC<Props> = ({ user }) => {
    console.log(" Row = called")
    const updateUser = useUpdateUser();

    if (updateUser.isLoading) return (
        < TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={{ backgroundColor: "orange" }}>
            <TableCell component="th" scope="user">{user.first_name}</TableCell>
            <TableCell align="right">{user.last_name}</TableCell>
            <TableCell align="right">{user.attendCount}</TableCell>
            <TableCell align="right">
                {user.currentlyAttending ?
                    <Button variant="outlined" onClick={() => { updateUser.mutate(user._id); }}>Attending</Button>
                    : <Button variant="outlined" onClick={() => { updateUser.mutate(user._id); }}>Not Attending</Button>}

            </TableCell>
        </TableRow >
    );

    if (updateUser.isError) return <>Something went wrong</>;
    if (user.currentlyAttending) {
        return (
            < TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={{ backgroundColor: "green" }}>
                <TableCell component="th" scope="user">{user.first_name}</TableCell>
                <TableCell align="right">{user.last_name}</TableCell>
                <TableCell align="right">{user.attendCount}</TableCell>
                <TableCell align="right">
                    <Button variant="outlined" onClick={() => { updateUser.mutate(user._id); }}>Cancel</Button>
                </TableCell>
            </TableRow >
        )
    }
    return (
        < TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="user">{user.first_name}</TableCell>
            <TableCell align="right">{user.last_name}</TableCell>
            <TableCell align="right">{user.attendCount}</TableCell>
            <TableCell align="right">
                <Button variant="outlined" onClick={() => { updateUser.mutate(user._id); }}>Attending</Button>
            </TableCell>
        </TableRow >
    );

}