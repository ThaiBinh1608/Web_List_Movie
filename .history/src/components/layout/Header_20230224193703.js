import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
     
        <header className="header flex  text-xl font-semibold items-center justify- gap-x-5 text-white py-10 mb-5 ">
        <div className='text-xl text-left'>Z<span>u</span>es</div>
       <div className='flex  text-xl font-semibold items-center justify-center gap-x-5'>
        <NavLink to="/" className={({isActive}) => isActive ? "text-primary": ""}>
            Home
        </NavLink>
        
        <NavLink to="/movies" className={({isActive}) => isActive ? "text-primary": ""}>
            Movies
        </NavLink>
      
        <NavLink to="/TVseries" className={({isActive}) => isActive ? "text-primary": ""}>
            TV Series
        </NavLink>
        </div>
    </header>
    </>
    );
};

export default Header;
