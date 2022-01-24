import React from 'react';
import Card from './CampusCard';
import image from './images/pic1.jpeg'

export default function StudentForm() {

  return (
        <div>
            <h1> Show Student </h1>
                <div className='student-info'>
                    <img src={image} />
                    <h3> Student Name here</h3>
                    <h4> GPA: 3.0 </h4>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            <h3> This student is registered to a campus </h3>
                <div className="showstudent-campuscard">
                <div className="student-info bottom">
                    <Card />
                    <select>
                        <option> Campus 1</option>
                        <option> Campus 2</option>
                        <option> Campus 3</option>
                        <option> Campus 4</option>
                    </select>
                    <button>Change Campus</button>
                </div>
                </div>
        </div>
  )
}
