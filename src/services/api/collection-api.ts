import axios from 'axios';
import { CollectionI } from '../../interfaces/collection-i';

const collectionUrl: string = process.env.URLUSER as string;

export const getCollection = (id: string): Promise<Response> =>
    axios.get(collectionUrl + id);
export const getCollections = (): Promise<Response> => axios.get(collectionUrl);
export const addCollection = (collection: CollectionI): Promise<Response> =>
    axios.post(collectionUrl, collection);
export const updateCollection = (collection: CollectionI): Promise<Response> =>
    axios.patch(collectionUrl + collection.id, collection);
export const deleteCollection = (collection: CollectionI): Promise<Response> =>
    axios.delete(collectionUrl + collection.id);
