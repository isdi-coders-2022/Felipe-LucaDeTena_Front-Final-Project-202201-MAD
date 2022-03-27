import * as api from '../../services/api/collection-api';
import actionTypes from './action-types';
import { AppDispatch } from '../store';

export function loadCollections() {
    return (dispatch: AppDispatch) => {
        api.getCollections().then((resp: any) => {
            dispatch({
                type: actionTypes.loadCollections,
                payload: resp.data,
            });
        });
    };
}
export function loadCollection(collection: any) {
    return (dispatch: AppDispatch) => {
        api.getCollection(collection).then((resp: any) => {
            dispatch({
                type: actionTypes.loadCollection,
                payload: resp.data,
            });
        });
    };
}
export function addCollection(collection: any, token: string) {
    return (dispatch: AppDispatch) => {
        api.addCollection(collection, token).then((resp: any) => {
            dispatch({
                type: actionTypes.addCollections,
                payload: resp.data,
            });
        });
    };
}
export function removeCollection(collection: any, token: string) {
    return (dispatch: AppDispatch) => {
        api.deleteCollection(collection, token).then((resp: any) => {
            dispatch({
                type: actionTypes.deleteCollections,
                payload: resp.data,
            });
        });
    };
}
export function updateCollection(parcialCollection: any, token: any) {
    return (dispatch: AppDispatch) => {
        api.updateCollection(parcialCollection, token).then((resp: any) => {
            dispatch({
                type: actionTypes.updateCollections,
                payload: resp.data,
            });
        });
    };
}
