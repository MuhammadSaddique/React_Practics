import React, { useState } from "react";

const USArrycompontent = () => {
  let num = [11, 12, 13, 14, 15];
  const [number, SetNumber] = useState(num);

  const ChangeList = () =>{
    SetNumber(previous=>{
      return[
        ...previous,
        98,89,78
      ]
    })
}




// const ChangeList = () =>{
//     SetNumber([55,33,22,44,56,78,90])
// }


  return (
    <div>
      <ul>{number.map((n,i)=> <li key={i}>{n}</li>)}</ul>
      <button onClick={ChangeList}>Change Array</button>
    </div>
  );
};

export default USArrycompontent;
