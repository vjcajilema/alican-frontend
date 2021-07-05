import React from 'react';
import API from './Environment/config';



//import Cookies from 'js-cookie'
const ENDPOINTS = {
  logup: "usuario/usuario/",

}
/*
{
        "name": "victor",
        "last_name": "root",
        "username": "victor",
        "email": "vjcajilema@espe.edu.ec",
        "password": "pbkdf2_sha256$260000$h0NwTlb3cfjQXGnSfNGTc1$HV6GBqK6tKH2w31ggdIBoB9iiAZtcHX5xpJ6cheeYro="
    } 
*/
const UserApi = {
  LogUp: (firstName, lastName, userName, email, password) => new Promise(
    (resolve, reject) => {
      API.post(ENDPOINTS.logup,
        JSON.stringify({
          'name': firstName,
          'last_name': lastName,
          'username': userName,
          'email': email,
          'password': password,

        })
      )
        .then(
          res => res
        )
        .then(
          data => resolve(data)
        )
        .catch(
          err => reject(err),

        )
    }
  ),


}

export default UserApi;