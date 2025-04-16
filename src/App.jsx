// import React , {useEffect,useState,useContext} from "react";
// import Login from "./components/Auth/Login";
// import EmployeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { AuthContext } from "./context/AuthProvider";

// // import {getData,setData} from "./utils/localStorage"

// // import { useContext } from "react";

// const App = () => {
//   const[user,setUser] = useState(null)
//   const [userData,SetUserData] = useContext(AuthContext)
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
  
//   useEffect(()=>{
//     const loggedInUser = localStorage.getItem('loggedInUser')
//     if(loggedInUser){
//       const userData = JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLoggedInUserData(userData.data) 
//     }
//   },[]) 
  


//   //Debugging logs
//   // console.log("App - authData:",authData);
//   // console.log("App -user:",user);
//   // console.log("App - loggedInUserData:",loggedInUserData);
  
//   const handleLogin = (email,password)=>{
//     console.log("handleLogin - email:",email,"password:",password);//debugging login
//     if(email == 'admin@me.com' && password == '123'){
//       setUser('admin');
//       localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))    
//   }
//   else if(userData){
//     const employee = userData.find((e)=>e.email === email && e.password === password)
//     console.log("handleLogin - Found employee:",employee);//debugging login
//     if(employee){
//       setUser('employee')
//       setLoggedInUserData(employee);
//       localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee})
//     )    
//     }
//     else{
//       alert("Invalid Credentials")
//     }
//   }
//   else{
//     alert("Invalid Credentials")
//   }
// };

// // if (!authData) {
// //   return <p>Loading...</p>; // Prevent accessing null data
// // }


// // handleLogin('usern@me.com',123)
//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin}/>:''}
//       {user === 'admin' ? <AdminDashboard changeUser={setUser}/>: (user === 'employee'?<EmployeDashboard changeUser={setUser} data = {loggedInUserData}/> : null ) }
//     </>
//   );
// }
// export default App;
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App