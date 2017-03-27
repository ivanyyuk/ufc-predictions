import React from 'react';
import {Link} from 'react-router';

const EventBox = ({name, tagLine, image, date, id, fights, faded, fadeIn, fadeOut}) => ( 
  <div className='event-row container flex flex-nowrap center items-center '
        onMouseEnter={ () => fadeIn(id)}
        onMouseLeave = { () => fadeOut(id)} 
      >
    <div className={`event-card col ${faded ? 'md-col-6 lg-col-6': 'md-col-12 lg-col-12'} sm-col-12 xs-col-12`}>
      <article className="" 
      >
        <div className="">
          <h2 className="">{name}</h2>
          <Link className='' to={`/events/${id}`}>
            <img src={image} 
              className='rounded mx-auto'
              alt={name}
            />
          </Link>
          <h3 className="">{tagLine}</h3>
        </div>
      </article>
    </div>
    {
      faded &&
        <div
          className={`event-info fade-in col md-col-6 lg-col-6 sm-col-12 xs-hide sm-hide `}>
          <ul className='list-reset center'>
            {
              fights &&
                fights.map(fight => <li className='my1'
                  key={fight.fighter1.id}>
                  <Link className='navy'
                    to={`/fight/${fight.fighter1.id}/${fight.fighter2.id}`}
                >{fight.fighter1.name} vs {fight.fighter2.name}</Link></li>)
            }
          </ul>
        </div>
    }
  </div> 
);

export default EventBox;

