import '../App.css';
import React from 'react';
import image from './images/pic1.jpeg'
import StudentCard from './StudentCard';
import { Link } from 'react-router-dom';

export default function Students() {

  let studentPics = []



  return (
        <div>
            <h1> Students Page </h1>
              <div className="student-page">
                <Link to={"/addstudentform"}>Add Student</Link>
                  <div className='student-cards'>
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                  </div>
              </div>
        </div>
  )
}
