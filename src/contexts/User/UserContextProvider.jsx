import React, { useContext, useState } from "react";
import userContext from "../User/userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    phone: "123-456-7890"
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

export const useUser = () => {
  return useContext(userContext);
};