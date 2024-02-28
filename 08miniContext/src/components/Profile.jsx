import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>;
  }
  return( 
  <div>
    <h3>Welcome {user.username}</h3>
    <h3>Your Password {user.password}</h3>
  
    </div>
  )
}

export default Profile;
