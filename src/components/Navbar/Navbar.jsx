import React from "react";
import {NavLink} from "react-router-dom";


let Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to={'/monday'}>
                <p>Monday</p>
            </NavLink>
            <NavLink to={'/tuesday'}>
                <p>Tuesday</p>
            </NavLink>
        </div>
    )
};

export default Navbar;