import React, { FC, useEffect, useState } from "react";
import { StyledTable } from "./styles";
import { User } from '../../types';

interface props {
    users: any
}

export const Table: FC<props> = ({ users }) => {

    const [list, setList] = useState(users.users);
    const [loaded, setLoaded] = useState(false);
    console.log("In table content " + users);
    return (
        <div className="userTable">
            {list?.map((user: User) => (
                <div>
                    <h1>user</h1>
                </div>
            ))}
        </div>
    );
};