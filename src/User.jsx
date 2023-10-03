import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams("");
  console.log(params.id);

  return (
    <>
      <div className="user">user page</div>
    </>
  );
}

export default User;
