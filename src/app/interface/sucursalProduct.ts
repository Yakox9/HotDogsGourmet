import {ProductQuanty} from './productsQuanty';
export interface SucursalProduct {
    _id: string,
    name: string,
    desc: string,
    productos: ProductQuanty[]
}
