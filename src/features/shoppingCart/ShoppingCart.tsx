import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './ShoppingCart.module.css'

export const ShoppingCart: React.FC = () => {

    return (
        <div>
            <div>there is not products in your shopping cart</div>
            <div className={s.containerNavlinks}>
                <NavLink to={'/'}>Go to start</NavLink>
                <NavLink to={'/products'}>To shopping again</NavLink>
            </div>

            <div></div>

        </div>
    )
}
