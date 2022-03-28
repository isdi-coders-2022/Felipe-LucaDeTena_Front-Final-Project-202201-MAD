import * as api from '../../services/api/user-api';
import actionTypes from './action-types';
import { AppDispatch } from '../store';

export function loadUser(userState: any) {
    return (dispatch: AppDispatch) => {
        api.getUser(userState).then((resp: any) => {
            dispatch({
                type: actionTypes.loadUser,
                payload: resp.data,
            });
        });
    };
}
export function updateUser(parcialUser: any, token: any) {
    return (dispatch: AppDispatch) => {
        api.updateUser(parcialUser, token).then((resp: any) => {
            dispatch({
                type: actionTypes.updateUser,
                payload: resp.data,
            });
        });
    };
}
export function followUser(user: any, token: any) {
    return (dispatch: AppDispatch) => {
        api.follow(user, token).then((resp: any) => {
            dispatch({
                type: actionTypes.follow,
                payload: resp.data,
            });
        });
    };
}
export function unFollowUser(user: any, token: any) {
    return (dispatch: AppDispatch) => {
        api.unFollow(user, token).then((resp: any) => {
            dispatch({
                type: actionTypes.unFollow,
                payload: resp.data,
            });
        });
    };
}
