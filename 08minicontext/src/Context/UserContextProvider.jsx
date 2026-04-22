import React from "react";
import UserContext from "./UseContext";

const UserContextProvider = ({children}) =>{ // children ek generic nam h ki jobhi iske pass arha h use bs age pass krdo kind of div
const [user,setuser]=React.useState(null)//api call

return(//konsi value ko acces de rha ho global usercontext ka (prope)value{{user,setuser}} humne value mw object pass krdiya taki multiple chize pass kr sakae
    <UserContext.Provider value={{user,setuser}}>
        {children}
    </UserContext.Provider>
)
}

export default UserContextProvider