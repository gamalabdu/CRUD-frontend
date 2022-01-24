import React from 'react';
import image from "./images/campus1.jpeg"
import { Link } from 'react-router-dom';

export default function CampusCard() {


  return (

    <div className="campus-card"> 
        <img src={image} />
        <Link to={"/campusformpage"}>campus name</Link>
        <h3> num of students here </h3>
        <button>delete</button>
        <button>edit</button>
    </div>

  )
}
