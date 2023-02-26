import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header flex items-center text-xl font-semibold justify-center gap-x-5 text-white py-10 mb-5 ">
        <div className='text-'>Z<span>u</span>es</div>
        <NavLink to="/" className={({isActive}) => isActive ? "text-primary": ""}>
            Home
        </NavLink>

        <NavLink to="/movies" className={({isActive}) => isActive ? "text-primary": ""}>
            Movies
        </NavLink>

        <NavLink to="/TVseries" className={({isActive}) => isActive ? "text-primary": ""}>
            TV Series
        </NavLink>
   
    </header>
    );
};

export default Header;