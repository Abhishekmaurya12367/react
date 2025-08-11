import React from "react";
import userContext from "./usercontex";

const userprovidercontext=({children})=>{
    const[user,setUser]=React.useState(null)

    return(
        <userContext.provider value={{user,setUser}} >
         {children}
         </userContext.provider>
       


    )

}
export default userprovidercontext