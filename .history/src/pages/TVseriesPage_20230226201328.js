import React from 'react';
import TVseriesList from '../components/TVseries/TvseriesList';

const TVseriesPage = () => {
    
    return (
        <div className='py-10'>
               <TVseriesList type='popular'></TVseriesList> 
        </div>
    );
};

export default TVseriesPage;