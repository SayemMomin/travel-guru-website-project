import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const RoomBook = (props) => {
    console.log(props)
    const {title, description, imgUrl, bed, capacity, bedType, price} = props.room;
    return (
        <div>
            <Container>
                <Card style={{ width: '36rem' }} className='d-flex'>
                <Row>
                    <Col sx={6} md={6}>
                    <Card.Img variant="top" src={imgUrl} />             
                    </Col>
                    <Col sx={6} md={6}>
                    <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                    {description} 
                    <p>{bed} Bed
                    {capacity} Person Capacity {bedType} BedType
                    </p> 
                    <p>${price}/night</p>
                    </Card.Text>
                    <Button variant="primary">Book</Button>
                    </Card.Body>
                    </Col>
                </Row>
                </Card>
            </Container>
        </div>
    );
};

export default RoomBook;