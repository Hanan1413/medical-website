import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './day.module.css'

const DayItem = ({singleDay}) => {
    const {schedule} = singleDay;
    const [selectDay, setSelectDay] = useState(null);

    const handleDaySelect = ()=>{
        setSelectDay(schedule)
        console.log(schedule)
    }

  return (
    
    <div className=' d-flex p-1 blue-border '>
    
     <button  onClick={handleDaySelect}  className={styles.btn} >{schedule}</button>    
    </div>
  )
}

export default DayItem
