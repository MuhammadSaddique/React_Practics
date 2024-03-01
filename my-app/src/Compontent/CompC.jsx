import React, { useContext } from "react";
import { ChannelContext, NameContext } from "../App";

const CompC = () => {
    const myName = useContext(NameContext)
    const myChannel = useContext(ChannelContext)
    
    
  return (
    <div>
      <h1>I am Compontent C</h1>
      <h1>{myName}</h1>
      <h1>{myChannel}</h1>
    </div>
  );
};

export default CompC;
