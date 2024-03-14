import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  //we'll ask the authStatus whether user is active or not
  const authStatus = useSelector(state.auth.status);

  useEffect(() => {
    true && true;

    //way--1
    // if (authStatus === true) {
    //   navigate("/");
    // }
    // else if(authStatus === false){
    //     navigate("/login")
    // }

    //way--2
    //let authValue= authStatus=== true? true: false

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
