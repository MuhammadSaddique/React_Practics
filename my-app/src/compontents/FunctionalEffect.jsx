import React, { useEffect, useState } from "react";

const FunctionalEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("saddique");
  useEffect(() => {
    console.log("Hello i m effected = " + count);
  }, [count, name]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
      <button onClick={() => setName("Shafique")}>Update Name</button>
    </div>
  );
};

export default FunctionalEffect;
