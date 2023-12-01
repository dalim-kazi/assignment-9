import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ head }) => {
    const {name,path}=head
    return (
        <div className='text-white hover:text-red-600  mr-7'>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};

export default Navbar;