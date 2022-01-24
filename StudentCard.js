import React from 'react';
import { Link } from 'react-router-dom';
import image from './images/pic1.jpeg'

export default function StudentCard() {

  return (
        <div className='student-card'>
            <img src={image} />
            <Link to={"/studentformpage"}>student name</Link>
            <a> campus name here</a>
        </div>
  )
}
