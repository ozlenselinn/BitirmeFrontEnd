import React from "react";
import axios from "axios"; 

class UserService {

   getUsers = ()  => {

return axios.get('http://localhost:8080/api/addWantedPeople/')


}





}
export default UserService