import axios from 'axios';
import { CollectionI } from '../../interfaces/collection-i';

const COLLECTIONURL = 'http://localhost:3600/collections';

export const getCollection = (id: string): Promise<Response> =>
    axios.get(COLLECTIONURL + id);

export const getCollections = (): Promise<Response> => axios.get(COLLECTIONURL);

export const addCollection = (
    collection: CollectionI,
    token: string
): Promise<Response> =>
    axios.post(COLLECTIONURL, collection, {
        headers: { authorization: `Bearer ${token}` },
    });
export const updateCollection = (
    collection: CollectionI,
    token: string
): Promise<Response> =>
    axios.patch(COLLECTIONURL + collection.id, collection, {
        headers: { authorization: `Bearer ${token}` },
    });
export const deleteCollection = (
    collection: CollectionI,
    token: string
): Promise<Response> =>
    axios.delete(COLLECTIONURL + collection.id, {
        headers: { authorization: `Bearer ${token}` },
    });
