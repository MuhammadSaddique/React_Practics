import React, { useState } from "react";

const FunctionInput = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    const new_Value = name === "email" ? value.target : value;
    // console.log(name,value);
    console.log(e.target);

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name:</label>
        <input
          type="text"
          value={data.name}
          name="name"
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Enter Email:</label>
        <input
          type="text"
          value={data.email}
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FunctionInput;
