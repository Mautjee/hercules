import React, { FC, useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '../../types';
interface props {
    list: User[]
}

export const UserTable: FC<props> = ({ list }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Voornaam</TableCell>
                        <TableCell align="right">Achternaam</TableCell>
                        <TableCell align="right">Totaal aantal keer aanwezig</TableCell>
                        <TableCell align="right">Aanwezig</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row) => {
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td,&:last-child th': { border: 0 } }}
                            style={row.currentlyAttending
                                ? ({ backgroundColor: 'green', color: 'white', })
                                : ({ backgroundColor: 'red', color: 'white', })}
                        >
                            <TableCell component="th" scope="row">
                                {row.first_name}
                            </TableCell>
                            <TableCell align="right">{row.last_name}</TableCell>
                            <TableCell align="right">{row.attendCount}</TableCell>
                            <TableCell align="right">{row.currentlyAttending}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};