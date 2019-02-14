import React, { Component } from 'react';


function ParksCard(props){
    let divImg = "background-image:URL("+props.parks.url+")";
    return (
      <div role="image" style= divImg ></div>
  
      <div className="card">
        <div className="img-container">
          <img
            alt="SpongeBob"
            src= {props.friends.image}
          />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.friends.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.friends.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.friends.location}
            </li>
          </ul>
        </div>
      </div>
    );
  }