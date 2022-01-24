import '../App.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './CampusCard';

export default function Campus() {

  

  return (
      <div>
          <h1>All Campuses</h1>
            <div className="campus-page">
                <Link to={"/addcampusform"}>Add Campus</Link>
                <div className="campus-cards">
                <Card />
                <Card />
                </div>
            </div>
      </div>
  )
}
