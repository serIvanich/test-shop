import React from 'react'
import {Product} from "../products/product/Product";
import {ProductType} from "../products/products-reduser";

type ProductCardType = {
    prod: ProductType
}

export const ProductCard: React.FC<ProductCardType> = ({prod}) => {
    return (
        <Product prod={prod}/>
    )
}