import React, { Component, useEffect, useState } from 'react'

import React from 'react'
import UserService from '../Service/UserService'

export default function Users() {
  const [user, setUsers] = useState([]) //hook
  useEffect (()=> {
   
    let userService = new UserService();
    
    userService.getUsers().then((result)=>{setUsers(result.data.data)})   
   



  })








  return (
    <div></div>
  )
}

