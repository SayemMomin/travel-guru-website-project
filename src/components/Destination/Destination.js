import React, { useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Container } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import travelData from '../../TravelData/TravelData';
 
import "react-datepicker/dist/react-datepicker.css";



const Destination = () => {
    const history = useHistory()
    const handleConfirmBooking = () => {
        history.push('/destinationDetails')
    }

    const [startDate, setStartDate] = useState(new Date());
    const handleDate = (date) => {
        setStartDate(date)
    }
    const {travelKey} = useParams();
    const travelPlace = travelData.find(travel => travel.spotPlaceNo == travelKey)
    //console.log(travelPlace)
    const {title, description} = travelPlace
    return (
        <div style={{ height: '600px', color: 'white',  backgroundAttachment: 'fixed', backgroundImage: `url('https://i.ibb.co/PxHgmwr/Rectangle1.png')` }}  >  
            <Container>
                <div className='row d-flex p-5'>
                    <div className='col-lg-6'>
                    <h1>{title} </h1>
                    <p>{description} </p>
                    </div>
                    <div className='col-lg-6'>
                    <Form className="d-50 border border-primary mr-5 p-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="text" placeholder="Where are you from..." />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder="Where are you go..." />
                    </Form.Group>
                    <div className='row'>
                    <div className='col-lg-6'>
                    <Form.Group controlId="">
                        <Form.Label>From</Form.Label> <br/>
                        <DatePicker selected={startDate} 
                        onChange={handleDate} />
                    </Form.Group>
                    </div>
                    <div className='col-lg-6'>
                    <Form.Group controlId="">
                        <Form.Label>To</Form.Label> <br/>
                        <DatePicker selected={startDate} 
                        onChange={handleDate} />
                    </Form.Group>
                    </div>
                    
                    </div>
                    <Form.Group controlId="">
                    <Form.Control onClick={handleConfirmBooking} type="submit" value='Start Booking' className='bg-primary text-white' />
                    </Form.Group>
                    </Form>            
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Destination;