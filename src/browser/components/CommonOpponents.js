import React from 'react';

export default ({ commonOpponents, fighter1, fighter2 }) => {
  if (commonOpponents.length)
    return(
      <div className='common-opponents-container'>
        <h6>COMMON OPPONENTS</h6> 
        <br/>
        <div>
          {
            commonOpponents.map(fight =>(
              <div key={fight.opponent}>
                <div>
                  <span className='green-text'>  
                    { fight.opponent.toUpperCase() }
                  </span>
                </div>
                <div className='row valign-wrapper'>
                  <div className='col s4'>   {fighter1.first_name.slice(0,1)}.{fighter1.last_name} <br />
                    <span 
                      className={fight.fighter1==='win' ? 'blue-text' : 'red-text'}
                    >{fight.fighter1 === 'win' ? 'won' : 'lost'}</span>
                  </div>
                  <div className='col s4 valign'> <h4> || </h4> </div>
                  <div className='col s4'>
                    {fighter2.first_name.slice(0,1)}.{fighter2.last_name} <br />
                    <span 
                      className={fight.fighter2==='win' ? 'blue-text' : 'red-text'}
                    >{fight.fighter2 === 'win' ? 'won' : 'lost'}</span>
                  </div>
                </div>
              </div>
            )
          )
          }
        </div>
      </div>
    );
  
  else return(<div></div>);
};
