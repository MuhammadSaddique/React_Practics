import React from "react";

const ListRendering = () => {
  // const students = ["Noman", "Ali", "Ahmed", "Kashif"];
  // let studentsName = students.map((std, index) => <li key={index}>{std}</li>);

  //   const numbers = [2, 4, 6, 8, 10];
  // const result = numbers.map((nums) => (
  //   <h1>{(nums = nums * 3)}</h1>
  // ));

  const studentObj = [
    {
      id: 1,
      name: "saddique",
      age: 20,
    },
    {
      id: 2,
      name: "Qadoos",
      age: 21,
    },
    {
      id: 3,
      name: "Noman",
      age: 27,
    },
  ];
  const studentObjs = studentObj.map((std, index) => (
    <li>
      {" "}
      key={std.index} {std}
    </li>
  ));

  return (
    <div>
      {/* {<ul>{studentsName}</ul>} */}

      {/* {students.map((std)=><h1>{std}</h1>)} */}

      {/* {numbers.map((nums) => (
        <h1>{(nums = nums * 3)}</h1>
      ))} */}

      {/* {result} */}

      {}
    </div>
  );
};

export default ListRendering;
