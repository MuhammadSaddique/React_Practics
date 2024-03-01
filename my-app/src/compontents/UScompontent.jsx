import React, { useState } from 'react'

const UScompontent = () => {
  const myArry =  useState("saddique")
  console.log("myArry",myArry);
  return (
    <div>
      
       <h1>{myArry[0]}</h1> 
<button onClick={()=> myArry[1]("Qadoos")}>Update</button>
      
    </div>
  )
}

export default UScompontent
