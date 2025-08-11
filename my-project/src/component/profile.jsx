import React from 'react'
import UserContext from '../context/usercontex'


function profile() {
  const {user}=userContex(UseContext)
  return (
    <div>
       if(!user) return <div>please login</div>
      
       return <div>welcome to {user.username}</div>
      
    </div>
  )
}

export default profile
