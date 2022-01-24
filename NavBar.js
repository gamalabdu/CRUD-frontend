
import React from 'react';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Campus from './CampusPage';
import Students from './StudentsPage';
import App from '../App';

export default function NavBar() {


  return (
      <div>
                <div className="navbar">
                    <Link to={"/"}>Home</Link>
                    <br></br>
                    <Link to={"/studentspage"}>Students</Link>
                    <br></br>
                    <Link to={"/campuspage"}>Campus</Link>
                </div>
      </div>
  )
 
}
