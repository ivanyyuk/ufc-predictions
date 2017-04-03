import React from 'react';
import {Link} from 'react-router';

const EventBox = ({name, tagLine, image, date, id, fights, faded, fadeIn, fadeOut, toggleFights, showFights}) => ( 
  <div className='event-container row'
    onMouseEnter={ () => fadeIn(id)}
    onMouseLeave = { () => fadeOut(id)} 
  >
    <div className='container col s12 m8 l6'>
      <div className="event-row row">
        <div className="event-card col s12">
          <div className="card">
            {
          showFights &&
                <div
              className={`card-image`}>
              <ul className='event-card-fights collection with header with-links'>
                <li className='collection-header center-align'><h6>{name}</h6></li>
                {
                  fights &&
                    fights.map(fight => <li className='center-align' 
                      key={fight.fighter1.id}>
                      <Link className='collection-item' 
                        to={`/fight/${fight.fighter1.id}/${fight.fighter2.id}`}
                      >{fight.fighter1.name} vs {fight.fighter2.name}</Link></li>)
                }
              </ul>
            </div>
            }
            {
              !showFights && 
                <div>
<div className="card-image">
              <img
                src={image==='http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffeatures%252F019907_WEB_EventPlaceholderRebrand_PPV.jpg?-mw500-mh500-tc1'
                  ? '/placeholder.png' : image} alt={name} />
                <span className="card-title white-text-black-border">{name}</span>
              </div>
              <div className="card-content">
                <p>{tagLine}</p>
              </div>
            </div>

            }
            <div className='hide-on-large-only'>
                          <div className='card-action'>
                            <div className='view-fights-card-action row'>
                            <span 
                              className='btn col s12 '
                              onClick={() => toggleFights(id)}
                            >{
                              showFights ? 'Back to event' : 'show fights'
                            }
                                  </span>
                          </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
        {
          faded &&
            <div
              className={`event-info fade-in col s12 l6 hide-on-med-and-down`}>
              <ul className='collection with-links with-header'>
                <li className='collection-header center-align'><h6>SCHEDULED FIGHTS</h6></li>
                {
                  fights &&
                    fights.map(fight => <li className='center-align' 
                      key={fight.fighter1.id}>
                      <Link className='collection-item' 
                        to={`/fight/${fight.fighter1.id}/${fight.fighter2.id}`}
                      >{fight.fighter1.name} vs {fight.fighter2.name}</Link></li>)
                }
              </ul>
            </div>
        }
      </div> 
      );

      export default EventBox;

