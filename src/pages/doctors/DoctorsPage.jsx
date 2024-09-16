import React from 'react'
import { doctors } from '../../data/data'
import DoctorItem from './DoctorItem'
import SectionsTitle from '../../components/title/SectionsTitle'

const DoctorsPage = () => {
  return (
    <>
    <div className='text-center'>
    <SectionsTitle title="نبذه عن أطباءونا"   descripton=" أطباءونا  مؤهلين في مجالات كثيرة لعلاج أصعب الحالات  " />

    </div>
    <div className="  d-flex flex-column flex-md-row flex-wrap gap-5  align-items-center justify-content-center  " style={{margin:"80px", cursor:"pointer"}}>
        {doctors.map((doc) =>(
           <DoctorItem  key={doc.id} doc={doc}/>
        ))} 
      
    </div>
    </>
  )
}

export default DoctorsPage
