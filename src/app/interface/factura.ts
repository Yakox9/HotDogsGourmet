import {ListProduct} from './list-product';
export interface Factura {

    total: number,
    fecha: Date,
    product: ListProduct[]
}
