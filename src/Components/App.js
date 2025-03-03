import React, { Component } from 'react';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import RentSpacing from './Rent_Spacing/RentSpacing';
import RequestDone from './RequestDone/RequestDone';
import Search from './Search/Search';
import Login from './Login/Login';
import Register from './Register/Register';
import Forgetpass from './Forgetpass/Forgetpass';
import Editpro from './Editprof/Editpro';
import ChangePass from './ChangePass/ChangePass';

import Owner from './Owner/Owner';
import ViewProfile from './Viewprofile/ViewProfile';


class App extends Component {
  render() {
    return (
        
      <div>
      <Navbar/>
      <Routes>
      <Route path="home" element={<Home/>}></Route>
      <Route path="RentSpacing" element={<RentSpacing/>}></Route>
      <Route path="RequestDone" element={<RequestDone/>}></Route>
      <Route path="search" element={<Search/>}></Route>
      <Route path="Login" element={<Login/>} />
      <Route path="EditProfile" element={<Editpro/>} />
      <Route path="Register" element={<Register/>}/>
      <Route path="Changepassword" element={<ChangePass/>}/>
      <Route path="Forgetpass" element={<Forgetpass/>}/>
      <Route path="/" element={<Register/>}/>
      <Route path="ViewProfile" element={<ViewProfile/>} ></Route>
      <Route path="Owner" element={<Owner/>}></Route>
    
      </Routes>
      
      </div>
    );
  }
}

export default App;
