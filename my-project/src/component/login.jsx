import React,{useState,useContext} from 'react'
import userContext from '../context/usercontex'

function login() {
const[username,setUsername]=useState("")
const[password,setPassword]=useState("")

const handleSubmit=()={
    

}
return (
    <div>
    <h2>login in my page</h2>
    <input type='text'
    value={username} 
    onChange={(e)=>setUsername(e.target.value)}
    placeholder='username'/>
    <input type='text'

     placeholder='password'/>
    <button onClick={HandleSubmit}>submit</button>
      
    </div>
  ) 
}

export default login
