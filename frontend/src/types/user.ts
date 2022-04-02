export interface User {
    _id: number;
    first_name: string;
    last_name: string;
    attendCount: number;
    currentlyAttending: boolean;
}
export interface isAttending {
    attending: boolean;
}

export interface UserList {
    users: User[];
}