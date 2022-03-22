/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';

function itemsReducer(state = [], action: AnyAction) {
    let newState;

    switch (action.type) {
        case actionTypes.loadItems:
            return [...action.payload];
        default:
            newState = state;
    }
    return newState;
}

export default itemsReducer;
