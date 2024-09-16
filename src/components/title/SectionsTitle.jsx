
import React from 'react'

const SectionsTitle = ({title, description}) => {
  return (
    <div style={{marginTop:'100px'}} className='mb-5'>
       <h1 className=' mb-4'>{title}</h1>
       <p>{description}</p>
    </div>
  )
}

export default SectionsTitle
