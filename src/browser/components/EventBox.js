import React from 'react';
import {Link} from 'react-router';

const EventBox = ({name, tagLine, image, date, id}) => ( 
  <Link to={`events/${id}`}>
    <div>
      <h1>{name}</h1>
      <br/>
      <h2>{tagLine}</h2>
      <img src={image} alt={name} />
      <p>{date}</p>
    </div>
  </Link>
);

export default EventBox;

