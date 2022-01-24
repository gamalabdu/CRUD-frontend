import React from 'react';
import image from './images/campus1.jpeg'

export default function CampusForm() {


  return (
      <div>
          <h1> Show Campus </h1>
          <img src={image} />
          <h3> Campus name </h3>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, repellendus. Corrupti necessitatibus distinctio magni praesentium ullam hic rem aut. Ex veniam obcaecati, saepe excepturi quod veritatis aut. Sunt, nihil totam? </p>
          <button> edit </button>
          <button> delete </button>

      </div>
  )
}
