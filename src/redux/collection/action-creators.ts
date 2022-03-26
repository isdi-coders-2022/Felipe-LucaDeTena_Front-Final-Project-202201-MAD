import * as api from '../../services/api/collection-api';
import actionTypes from './action-types';
import { AppDispatch } from '../store';

function loadCollections() {
    return (dispatch: AppDispatch) => {
        api.getCollections().then((resp: any) => {
            dispatch({
                type: actionTypes.loadCollections,
                payload: resp.data,
            });
        });
    };
}
function loadCollection(collection: any) {
    return (dispatch: AppDispatch) => {
        api.getCollection(collection).then((resp: any) => {
            dispatch({
                type: actionTypes.loadCollections,
                payload: resp.data,
            });
        });
    };
}
function addCollection(collection: any, token: string) {
    return (dispatch: AppDispatch) => {
        api.addCollection(collection, token).then((resp: any) => {
            dispatch({
                type: actionTypes.loadCollections,
                payload: resp.data,
            });
        });
    };
}
function removeCollection(collection: any, token: string) {
    return (dispatch: AppDispatch) => {
        api.deleteCollection(collection, token).then((resp: any) => {
            dispatch({
                type: actionTypes.loadCollections,
                payload: resp.data,
            });
        });
    };
}
function updateCollection(parcialCollection: any, token: any) {
    return (dispatch: AppDispatch) => {
        api.updateCollection(parcialCollection, token).then((resp: any) => {
            dispatch({
                type: actionTypes.loadCollections,
                payload: resp.data,
            });
        });
    };
}

export default {
    loadCollections,
    loadCollection,
    updateCollection,
    addCollection,
    removeCollection,
};
