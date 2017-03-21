import React from 'react';
import {Link} from 'react-router';

const EventBox = ({name, tagLine, image, date, id}) => ( 
  <Link className='link black' to={`/events/${id}`}>
    <article className="center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f3 mb2">{name}</h1>
        <img src={image} alt={name}
          className=" dib ba b--black-05 pa2" />
        <h2 className="f4 fw4 gray mt0">{tagLine}</h2>
        <h3 className="f5 fw4 gray mt0">{date}</h3>
      </div>
    </article>
  </Link>
);

export default EventBox;

