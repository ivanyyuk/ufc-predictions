import React from 'react';
import EventBox from '../components/EventBox';


export default ({events, toggleFade}) => {
  return (
    <div className='events'>
      <div>
        {
          events.slice().reverse().map(event => (
            <EventBox name={event.name}
              tagLine={event.tagLine}
              image={event.image}
              date={new Date(event.date).toString()}
              id={event.id}
              key={event.id}
              fights={event.fights}
              faded={event.faded}
              toggleFade={toggleFade} />
          ))
      }
      </div>
    </div>
  );
};
