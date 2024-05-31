import React from 'react'
// import { useState } from 'react'
const Squares = ({value,handleClick}) => {
   
    // const [value,setvalue]=useState(null)
//     function handleClick(e){
//         console.log(value)
//         console.log("e",e.target.textContent)
//         setvalue("x")
// }
  return (
    <div>
       
      <button className="square" onClick={handleClick}>{value}</button>
    </div>
  )
}

export default Squares
