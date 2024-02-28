import React, { useState } from "react";
import UserContext from "./UserContext";

//children holds the data which is coming and using it passes that data.
const UserContextProvider = ({ children }) => {
    const [user, setUser] =useState(null)
  return(
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;
