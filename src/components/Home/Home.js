import React from 'react';

import travelData from '../../TravelData/TravelData';
import TravelInfo from '../TravelInfo/TravelInfo';

const Home = () => {
    
    return (
        <div className='text-light bg-img d-flex justify-content-center m-2 '>
        {
            travelData.map(travelInfo => <TravelInfo key={travelInfo.id} travelInfo={travelInfo}></TravelInfo> )
        }

        
        </div>
    );
};

export default Home;