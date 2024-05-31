import React from 'react'
import Squares from './squares'
import { useState } from 'react'
import Turns from './turns'

const Board = () => {
  const checkwinner=(squares)=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i=0;i<lines.length;i++){
      const [a,b,c]=lines[i]
      if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c]){
        console.log("win")
        return squares[a]
      }

    }
    return null
  }
  
    
  
  const [xIsNext,setxIsNext]=useState(true)
  const [squares,setsquares]=useState(Array(9).fill(null))
  console.log("sq:"+squares)
 function handleClick(i){
  if(squares[i] || checkwinner(squares)){
    return
  }
  let nextsq=squares.slice()
  console.log("nextsq:"+nextsq)
  // whenever we are using the slice method we are just making the copy of the squares array every time we call a function 
  // which makes the squares array immutable(unchanged)
  
    if(xIsNext)
    nextsq[i]="X"
  else{
    nextsq[i]="O"

  }
  setsquares(nextsq)
  setxIsNext(!xIsNext)
}
const winner=checkwinner(squares)
let status
let x
// console.log(winner)
if(winner){
  status="the winner is :"+winner
}
else{

  if(xIsNext){
    x="X"
  }
  else{
    x="O"
  }

  status="Next turn: "+x
}



  return (
      <div className='sq-container'>
    <div className='board-sq'>
        <Squares value={squares[0]} handleClick={()=>handleClick(0)}/>
        <Squares value={squares[1]} handleClick={()=>handleClick(1)}/>
        <Squares value={squares[2]} handleClick={()=>handleClick(2)}/>
    </div>
    <div className='board-sq'>
        <Squares value={squares[3]} handleClick={()=>handleClick(3)}/>
        <Squares value={squares[4]} handleClick={()=>handleClick(4)}/>
        <Squares value={squares[5]} handleClick={()=>handleClick(5)}/>
    </div>
    <div className='board-sq'>
        <Squares value={squares[6]} handleClick={()=>handleClick(6)}/>
        <Squares value={squares[7]} handleClick={()=>handleClick(7)}/>
        <Squares value={squares[8]} handleClick={()=>handleClick(8)}/>
    </div>
      <Turns status={status}/>
    </div>

  )
}

export default Board
