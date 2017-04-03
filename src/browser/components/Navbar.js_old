import { Link, IndexLink, browserHistory } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import React from 'react';

function handleActive(tab) {
  browserHistory.push(tab.props[`data-route`]);
}

const styles = {
  appBar: {
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  tabs: {
    width: '100%',
    flexWrap:'wrap'
  }
};

export default () => {
  return(
    <div className='navbar'>
    <AppBar title={'UFC FIGHT PREDICTIONS'} 
      style={styles.appBar} 
      iconClassNameLeft={'hidden'}
      showMenuIconButton={true}>
    </AppBar>
      <div className=''>
          <Tabs style={styles.tabs}>
            <Tab label={'HOME'}
              onActive={handleActive}
              data-route={'/'}
            />
            <Tab label={'UPCOMING EVENTS'}
              onActive={handleActive}
              data-route={'/events'}
            />
            <Tab label={'SEARCH'} 
              onActive={handleActive}
              data-route={'/search'}
            />
          </Tabs>
        </div>
      </div>
  );
};
//export default () => {
//return(
//<div className='container clearfix fixed relative top-0 left-0 right-0 z2 block bg-black'>
//<div className='logo col col-12 center'>
//<Link to='/' className='btn'>
//<h1 className='white'>UFC FIGHT PREDICTIONS</h1>
//</Link>
//</div>

//<div className="col col-12 flex center nowrap white">
//<Tabs>
//<Tab>
//<IndexLink to='/'
//activeClassName='btn-primary'
//className='flex-auto btn'>
//Home
//</IndexLink> 
//</Tab>

//<Tab>
//<Link to='/events'
//activeClassName='btn-primary'
//className='flex-auto btn'>
//Upcoming Events
//</Link>
//</Tab>
//<Tab>
//<Link to='/search'
//activeClassName='btn-primary'
//className='flex-auto btn'>
//Search 
//</Link>
//</Tab>
//</Tabs>


//</div>
//</div>
//);
//};

//export default () => {
//return (
//<div className='container clearfix fixed relative top-0 left-0 right-0 z2 block bg-black'>
//<div className='logo col col-12 center'>
//<Link to='/' className='btn'>
//<h1 className='white'>UFC FIGHT PREDICTIONS</h1>
//</Link>
//</div>


//<Tabs>
//<Tab
//label="Home"
//data-route='/'
//onActive={handleActive}
//>
//</Tab>
//<Tab
//label="Upcoming Events"
//data-route='/events'
//onActive={handleActive}
//>
//</Tab>
//<Tab
//label="Search"
//data-route="/search"
//onActive={handleActive}
//>
//</Tab>
//</Tabs>
//</div>
//);
//};
