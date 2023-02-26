import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
     
        <header className="header flex w-full p-10 text-xl font-semibold bg-slate-900 items-center justify-between gap-x-5 text-white py-10 ">
        <div className='text-5xl font-bold text-left first-letter:'>Z<span className='text-primary'>u</span>es</div>
       <div className='flex  text-2xl font-semibold items-center justify-center gap-x-5'>
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
