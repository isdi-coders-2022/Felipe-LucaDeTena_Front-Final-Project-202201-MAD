import axios from 'axios';
import { CollectionI } from '../../interfaces/collection-i';

const collectionUrl = 'http://localhost:3600/collections/';

export const getCollection = (id: string): Promise<Response> =>
    axios.get(collectionUrl + id);
export const getCollections = (): Promise<Response> => axios.get(collectionUrl);
export const addCollection = (
    collection: CollectionI,
    token: string
): Promise<Response> =>
    axios.post(collectionUrl, collection, {
        headers: { authorization: `Bearer ${token}` },
    });
export const updateCollection = (
    collection: CollectionI,
    token: string
): Promise<Response> =>
    axios.patch(collectionUrl + collection.id, collection, {
        headers: { authorization: `Bearer ${token}` },
    });
export const deleteCollection = (
    collection: CollectionI,
    token: string
): Promise<Response> =>
    axios.delete(collectionUrl + collection.id, {
        headers: { authorization: `Bearer ${token}` },
    });
