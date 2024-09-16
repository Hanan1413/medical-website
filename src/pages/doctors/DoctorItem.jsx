import React from 'react';
import Card from 'react-bootstrap/Card';


const DoctorItem = ({doc}) => {
    const{name, description, image} = doc;

  return (
    <div className='shadow'>
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
           {description}
        </Card.Text>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default DoctorItem
