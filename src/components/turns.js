import React from 'react'

const turns = ({status}) => {

  return (
    <div className='next-turn'>
      {/* <h1>next turn:{X}</h1> */}
      <h1>{status}</h1>
    </div>
  )
}

export default turns
