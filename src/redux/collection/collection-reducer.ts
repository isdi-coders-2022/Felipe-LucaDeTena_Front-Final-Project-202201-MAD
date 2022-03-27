/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';
import { CollectionI } from '../../interfaces/collection-i';

interface CollectionsI {
    collections: CollectionI[];
}
const initialState = {
    collections: [],
};

function collectionsReducer(
    state: CollectionsI = initialState,
    action: AnyAction
) {
    console.log(action);
    switch (action.type) {
        case actionTypes.loadCollections:
            return { ...state, collections: [...action.payload] };
        default:
            return state;
    }
}

export default collectionsReducer;
