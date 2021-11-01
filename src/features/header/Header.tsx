import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export const Header: React.FC = () => {

    return (
        <div className={s.container}>
            <h2>ShopName</h2>
            <div className={s.navCart}>
                <NavLink to={'/cart'}> shopping cart </NavLink>
            </div>

        </div>
    )
}