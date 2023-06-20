import React from 'react'

const Section= ({title,description})=> {

  return (
    <div className='section'>
        <h1>{title}</h1>
        <p>{description}</p>
        <hr/>
      
    </div>
  )
}

export default Section
