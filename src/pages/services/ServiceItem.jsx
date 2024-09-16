import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceItem = ({treatment}) => {
  const { service, description, icon} = treatment;
  return (
    <div >
            <FontAwesomeIcon icon={icon} /> 

      <p >{service}</p>
      <p style={{width:"25%"}}>{description}</p>
    </div>
  )
}

export default ServiceItem;
