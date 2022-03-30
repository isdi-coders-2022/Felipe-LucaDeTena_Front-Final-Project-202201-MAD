import axios, { AxiosResponse } from 'axios';

// const userUrl: string = process.env.URLUSER as string;

// export const addUser = (user: UserI): Promise<AxiosResponse> =>
//     axios.post(userUrl, user);

export const getUser = (userState: any): Promise<AxiosResponse> =>
    axios.get(`http://localhost:3600/users/${userState.id}`, {
        headers: { authorization: `Bearer ${userState.token}` },
    });

export const updateUser = (
    parcialUser: any,
    userState: any
): Promise<AxiosResponse> => {
    const response = axios.patch(
        `http://localhost:3600/users/${userState.id}`,
        parcialUser,
        {
            headers: { authorization: `Bearer ${userState.token}` },
        }
    );
    return response;
};

// export const deleteUser = (user: UserI, token: any): Promise<AxiosResponse> =>
//     axios.delete(userUrl + user.id, {
//         headers: { authorization: `Bearer ${token}` },
//     });

export const follow = (user: any, id: string): Promise<AxiosResponse> =>
    axios.patch(`http://localhost:3600/users/following/${id}`, user, {
        headers: { authorization: `Bearer ${user.token}` },
    });

export const unFollow = (user: any, id: string): Promise<AxiosResponse> =>
    axios.patch(`http://localhost:3600/users/remove/${id}`, user, {
        headers: { authorization: `Bearer ${user.token}` },
    });
