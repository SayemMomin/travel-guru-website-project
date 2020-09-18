import React from 'react';
import {Button, Card } from 'react-bootstrap';

import { useHistory, Link } from 'react-router-dom';

const TravelInfo = (props) => {
    //console.log(props.travelInfo)
    const {title, destination, imgUrl, spotPlaceNo} = props.travelInfo;
    
  const history = useHistory()
  const handleBooking = (spotPlaceNo) => {
        history.push(`/destination/${spotPlaceNo}`)
  }
    return (
       
            <div style={{ height: '1000px', width: '100%', backgroundAttachment: 'fixed', backgroundImage: `url('https://i.ibb.co/PxHgmwr/Rectangle1.png')` }}  >  
        <Card style={{ width: '200px', height: '200px', margin: '10px' }}>
        <Link to ={"/destination/"+spotPlaceNo}>        <Card.Img variant="top" src={imgUrl} /></Link>
        <Card.Body>
        <Card.Title>{title} </Card.Title>
            <Card.Text>
            {destination}
            </Card.Text>
            <Button onClick={() => handleBooking(spotPlaceNo)} variant="primary">Booking</Button>
        </Card.Body>
        </Card>     
        </div>
        
    );
};

export default TravelInfo;