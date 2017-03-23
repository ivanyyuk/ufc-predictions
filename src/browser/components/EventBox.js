import React from 'react';
import {Link} from 'react-router';

const EventBox = ({name, tagLine, image, date, id}) => ( 
  <Link className='' to={`/events/${id}`}>
    <article className="">
      <div className="">
        <h1 className="">{name}</h1>
        <img src={image} alt={name}
          className="" />
        <h2 className="">{tagLine}</h2>
        <h3 className="">{date}</h3>
      </div>
    </article>
  </Link>
);

export default EventBox;

