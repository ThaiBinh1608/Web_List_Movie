import React from 'react';
import TVseriesList from '../components/TVseries/TvseriesList';

const TVseriesPage = () => {
    const {data} = useSWR
    return (
        <div className='py-10'>
               <TVseriesList type='popular'></TVseriesList> 
        </div>
    );
};

export default TVseriesPage;