import { ItemI } from './item-i';

export interface CollectionI {
    id?: Number;
    name: String;
    createdBy: Object;
    totalPrice: Number;
    items: ItemI[];
    favourite: Boolean;
    likes: Number;
}
