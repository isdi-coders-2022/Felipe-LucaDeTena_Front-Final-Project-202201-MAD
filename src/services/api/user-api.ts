import axios from 'axios';
import { UserI } from '../../interfaces/user-i';

const userUrl: string = process.env.URLUSER as string;

export const getUser = (id: string): Promise<Response> =>
    axios.get(userUrl + id);
export const addUser = (user: UserI): Promise<Response> =>
    axios.post(userUrl, user);
export const updateUser = (user: UserI): Promise<Response> =>
    axios.patch(userUrl + user.id, user);
export const deleteUser = (user: UserI): Promise<Response> =>
    axios.delete(userUrl + user.id);
export const follow = (user: UserI): Promise<Response> =>
    axios.patch(`${userUrl}following/${user.id}`, user);
export const unfollow = (user: UserI): Promise<Response> =>
    axios.patch(`${userUrl}remove/${user.id}`, user);
