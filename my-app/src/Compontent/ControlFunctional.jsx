import React, { useState } from "react";

const ControlFunctional = () => {
  const [name, setName] = useState("");
  const handlerSubmission = (e) => {
    e.preventDefault();
    console.log("e", e.target[0].value);
    alert( e.target[0].value)
  };
  return (
    <div>
      <form onSubmit={handlerSubmission}>
        <label htmlFor="">Enter Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ControlFunctional;
