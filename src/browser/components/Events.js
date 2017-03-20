import React from 'react';
import EventBox from '../components/EventBox';


export default ({events}) => {
  return (
    <div>
      <div>
        {
          events.reverse().map(event => (
            <EventBox name={event.name}
              tagLine={event.tagLine}
              image={event.image}
              date={new Date(event.date).toString()}
              id={event.id}
              key={event.id} />
          ))
        }
      </div>
    </div>
  );
};
