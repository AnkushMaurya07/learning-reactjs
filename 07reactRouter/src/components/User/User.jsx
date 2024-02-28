import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
  <div className="bg-blue-600 rounded-full text-4xl pt-7m">User:{userid}</div>
  )
}

export default User;
