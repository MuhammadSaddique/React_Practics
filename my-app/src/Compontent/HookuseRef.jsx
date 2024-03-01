import React, { useEffect, useRef } from "react";

const HookuseRef = () => {
  //   const newRef = useRef();

  const firstRef = useRef();
  const lastRef = useRef();

  useEffect(() => {
    // console.log(newRef.current.innerHTML);
    // console.log("newRef", newRef);

    console.log(firstRef);
    console.log(lastRef);
    firstRef.current.focus();
    firstRef.current.style.color = 'red';
    firstRef.current.style.backgroundColor = "Yellow"

  });
  //   const handleHeading = () => {
  //     newRef.current.style.color = "red";
  //     newRef.current.style.fontFamily = "cooper";
  //   };

const formHandling = (e)=>{
    e.preventDefault();
    console.log("Full Name: ", firstRef.current.value, lastRef.current.value);
}


  return (
    <div>
      {/* <h1 ref={newRef}>Hi i am try to develop you</h1>
      <button onClick={handleHeading}>Click me</button> */}

      <form onSubmit={formHandling}>
        <label htmlFor="">Enter First Name</label>
        <input type="text" ref={firstRef} placeholder="Enter Your firstName" />
        <br />
        <br />
        <label htmlFor="">Enter Last Name</label>
        <input type="text" ref={lastRef} placeholder="Enter Your lastName" />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookuseRef;
