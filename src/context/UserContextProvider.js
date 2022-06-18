import {createContext, useContext, useState} from "react";

//JASON HERE : let's create the context...
const UserContext = createContext();

//JASON HERE : this is a common pattern I see for creating a context provider... I'm sure there
//are a few other ways of doing this
export const UserContextProvider = ({children}) => {
  const [timeFrame, setTimeFrame] = useState("daily");
  return (
    <UserContext.Provider value={{timeFrame, setTimeFrame}}>
      {children}
    </UserContext.Provider>
  );
};

//JASON HERE : this too is a common pattern I see for creating the function that will *use*
//the context
export const useUserContext = () => useContext(UserContext);

//-------------------------
// JASON HERE : so I created 3 items in the context 1. create the context 2. context provider and
//all the values and state that will be passed throughout your app 3. a simply function for your
//components to use to *access* any of the value or functions...
