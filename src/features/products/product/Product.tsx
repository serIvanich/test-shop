import React from "react";
import s from './Product.module.css'
import {ProductType} from "../products-reduser";

export const Product: React.FC<ProductPropsType> = ({prod}) => {

    return (
        <div className={s.productBlock}>
            <div>{prod.photo}</div>
            <div>{prod.name}</div>
            <div>{prod.info}</div>
            <div>{prod.price}</div>

        </div>
    )
}

type ProductPropsType = {
    prod: ProductType
}
