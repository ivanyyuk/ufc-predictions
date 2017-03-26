import React from 'react';
import {Link} from 'react-router';

const EventBox = ({name, tagLine, image, date, id, fights, faded, toggleFade}) => ( 
  <div className='event-row container flex flex-nowrap center items-center'
        onMouseEnter={ () => toggleFade(id)}
        onMouseLeave = { () => toggleFade(id)} 
      >
    <div className={`event-card col ${faded ? 'md-col-6 lg-col-6': 'md-col-12 lg-col-12'} xs-col-12`}>
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
      <div
        className={`event-info fade-in col md-col-5 lg-col-5 sm-col-12 xs-hide sm-hide `}>
        <ul className='list-reset center'>
          {
            fights &&
              fights.map(fight => <li className='my1'
                key={fight.fighter1.id}>
                <Link to='#'>{fight.fighter1.name} vs {fight.fighter2.name}</Link></li>)
          }
        </ul>
      </div>
  }
</div> 
);

export default EventBox;

