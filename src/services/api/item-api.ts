import axios from 'axios';
import { ItemI } from '../../interfaces/item-i';

const itemUrl: string = process.env.URLUSER as string;

export const getItem = (id: string): Promise<Response> =>
    axios.get(itemUrl + id);
export const getItems = (): Promise<Response> => axios.get(itemUrl);
export const addItem = (item: ItemI): Promise<Response> =>
    axios.post(itemUrl, item);
export const updateItem = (item: ItemI): Promise<Response> =>
    axios.patch(itemUrl + item.id, item);
export const deleteItem = (item: ItemI): Promise<Response> =>
    axios.delete(itemUrl + item.id);
