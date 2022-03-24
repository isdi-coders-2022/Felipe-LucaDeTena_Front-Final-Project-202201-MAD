/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';
import { CollectionI } from '../../interfaces/collection-i';

interface UserRegisterI {
    id: String;
    name: String;
    surName: String;
    email: String;
    password: String;
    profileImg: any;
    backImg: any;
    interFaceColor: String;
    collections: CollectionI[];
    followers: UserRegisterI[];
    following: UserRegisterI[];
    isLogged: boolean;
}
const initialState: UserRegisterI = {
    id: '',
    name: '',
    surName: '',
    email: '',
    password: '',
    profileImg: '',
    backImg: '',
    interFaceColor: 'grey',
    collections: [],
    followers: [],
    following: [],
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
