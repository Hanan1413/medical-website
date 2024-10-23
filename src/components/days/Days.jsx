import React from 'react';
import { days } from '../../data/data';
import DayItem from './DayItem';

const Days = () => {
  return (
    <div className='d-flex flex-column gap-4   col-4 mb-5 '>
        {days.map((singleDay) =>(
            <DayItem  key={singleDay.id} singleDay={singleDay}/>
        ))}
      
    </div>
  )
}

export default Days
