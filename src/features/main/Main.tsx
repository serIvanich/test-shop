import React from "react";
import { NavLink } from "react-router-dom";

export const Main: React.FC = () => {

    return (
        <div>
            <NavLink to={'/products'}><p>SHOP TUR</p></NavLink>
        </div>
    )
}

