import React, { useState } from "react";

const USobjCompontent = () => {
  const obj = {
    Name: "Saddique",
    age: 20,
    height: 4.82,
    isYoung: true,
  };

  let changeState = () =>{

    setPerson(proviousState =>{
        return{
            ...proviousState,
            Name: "Manzoor"
        }
    })




    // setPerson({
    // Name: "Qadoos",
    // age: 23,
    // height: 5.82,
    // isYoung: false,
    // })
  }

  const [person, setPerson] = useState(obj);
  return (
    <div>
      <h1>{person.Name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>

      <button onClick={changeState}>Change</button>
    </div>
  );
};

export default USobjCompontent;
