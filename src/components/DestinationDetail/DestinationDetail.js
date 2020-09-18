import React from 'react';

import roomData from '../../RoomData/RoomData';
import RoomBook from '../RoomBook/RoomBook';
import GoogleMap from '../GoogleMap/GoogleMap';

const DestinationDetail = () => {
   
    return (
        <div className="m-5 row" >
           
           <div className='col-md-6'>
           {
                roomData.map(room => <RoomBook room={room}></RoomBook> )
                                
            }
           </div>
           <div className='col-md-6'>
              <GoogleMap ></GoogleMap>
           </div>

            
           
        </div>
    );
};

export default DestinationDetail;