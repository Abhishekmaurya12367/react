import React from "react";
import userContext from "./usercontex";

const userprovidercontext=({children})=>{
    const[user,setuser]=React.useState(null)

    return(
        <userContext.provider value={{user,setuser}} >
         {children}
         </userContext.provider>
       


    )

}
export default userprovidercontext