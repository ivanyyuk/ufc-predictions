import React from 'react';
import {Link} from 'react-router';

const EventBox = ({name, tagLine, image, date, id, faded, toggleFade}) => ( 
  <div className='event-row container flex flex-wrap center items-center'
        onMouseEnter={ () => toggleFade(id)}
        onMouseLeave = { () => toggleFade(id)} 
      >
    <div className={`event-card col ${faded ? 'md-col-6 lg-col-6': 'md-col-12 lg-col-12'} sm-col-12`}>
      <article className="" 
      >
        <div className="">
          <h1 className="">{name}</h1>
          <Link className='' to={`/events/${id}`}>
          <img src={image} alt={name}
            className="" />
        </Link>
        <h2 className="">{tagLine}</h2>
        <h3 className="">{date}</h3>
      </div>
    </article>
  </div>
  {
    faded &&
    <div className={`event-info col md-col-6 lg-col-6 sm-col-12 xs-hide sm-hide `}>
      <ul className='center'>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  }
</div> 
);

export default EventBox;

