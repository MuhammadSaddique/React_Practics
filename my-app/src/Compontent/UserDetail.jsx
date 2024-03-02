import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {

//   const userId =  useParams();
//   const id = userId.id;

const {id} = useParams();

  return (
    <div>
      <h1>User Details -- {id}</h1>
    </div>
  );
};

export default UserDetail;
