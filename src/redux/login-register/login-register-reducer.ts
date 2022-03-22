/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';

interface UserRegisterI {
    name: string;
    surName: string;
    email: string;
    password: string;
    id: string;
    isLogged: boolean;
}
const initialState: UserRegisterI = {
    name: '',
    surName: '',
    email: '',
    password: '',
    id: '',
    isLogged: false,
};

function loginReducer(state: UserRegisterI = initialState, action: AnyAction) {
    // eslint-disable-next-line no-console
    console.log(action);
    switch (action.type) {
        case actionTypes.logIn:
            state = { ...action.payload, isLogged: true };
            return state;
        case actionTypes.logOut:
            state = initialState;
            return state;
        case actionTypes.signUp:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default loginReducer;
