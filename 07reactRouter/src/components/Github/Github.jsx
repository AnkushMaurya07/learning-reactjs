<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data=useLoaderData()

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/AnkushMaurya07")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center bg-blue-100 text-black text-5xl pt-5 flex justify-center ">
      Github Followers:{data.followers}
      <img
        className=" rounded-full "
        src={data.avatar_url}
        alt="Git picture"
      ></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response=await fetch("https://api.github.com/users/AnkushMaurya07");
  return response.json()
};
=======
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data=useLoaderData()

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/AnkushMaurya07")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center bg-blue-100 text-black text-5xl pt-5 flex justify-center ">
      Github Followers:{data.followers}
      <img
        className=" rounded-full "
        src={data.avatar_url}
        alt="Git picture"
      ></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response=await fetch("https://api.github.com/users/AnkushMaurya07");
  return response.json()
};
>>>>>>> 932e2d8 (router-proj)
