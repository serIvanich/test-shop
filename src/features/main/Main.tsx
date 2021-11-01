import React from "react";
import {Link} from "@material-ui/core";
import { NavLink } from "react-router-dom";

export const Main: React.FC = () => {

    return (
        <div>
            <NavLink to={'/products'}><p>SHOP TUR</p></NavLink>
        </div>
    )
}

