
import React from 'react'

const SectionsTitle = ({title, descripton}) => {
  return (
    <div style={{marginTop:'100px'}}>
       <h1 className=' mb-4'>{title}</h1>
       <p>{descripton}</p>
    </div>
  )
}

export default SectionsTitle
