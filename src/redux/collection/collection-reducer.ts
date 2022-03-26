/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';
import { ItemI } from '../../interfaces/item-i';

interface CollectionsI {
    collections: ItemI[];
}
const initialState = {
    collections: [],
};

function collectionsReducer(
    state: CollectionsI = initialState,
    action: AnyAction
) {
    switch (action.type) {
        case actionTypes.loadCollections:
            return { ...state, collections: [...action.payload] };
        default:
            return state;
    }
}

export default collectionsReducer;
