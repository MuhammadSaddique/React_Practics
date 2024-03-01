import React, { useEffect, useRef, useState } from "react";

const HookuseRef2 = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <label htmlFor="">Enter Your Name</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Your Name"
      />
      <h2>Render Count : {count.current}</h2>
      <h1>Data : {inputValue}</h1>
    </div>
  );
};

export default HookuseRef2;
