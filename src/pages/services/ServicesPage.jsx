import React from 'react'
import {treatments} from '../../data/data';
import ServiceItem from './ServiceItem';

const ServicesPage = () => {
  return (
    <div >
      {treatments.map((treatment) =>(
        <ServiceItem  key={treatment.id} treatment={treatment}/>
      ))}
    </div>
  )
}

export default ServicesPage
