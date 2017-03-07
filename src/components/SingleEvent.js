import React from 'react';
import axios from 'axios';
import ReactSwipe from 'react-swipe';
import Fighter from '../components/Fighter';

class SingleEvent extends React.Component {
  constructor(){
    super();
    this.state = {
      fights: []
    };
  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.params.id}`)
      .then(res => res.data)
      .then(fights => {
        console.log(fights);
        this.setState({fights: fights})})
      .catch(console.error);
  }

  render() {
    return(
      <ReactSwipe key={this.state.fights.length} swipeOptions={{continuos: true}}>
        {
          this.state.fights.map((fight,index) => (
            <div key={index} className='versus-page'>
              <Fighter name={`${fight[0].first_name} ${fight[0].last_name}`}
                record={`${fight[0].wins}-${fight[0].losses}-${fight[0].draws}`}
                imgUrl={fight[0].profile_image} />
              <br />
              <h2>VS</h2>
              <Fighter name={`${fight[1].first_name} ${fight[1].last_name}`}
                record={`${fight[1].wins}-${fight[1].losses}-${fight[1].draws}`}
                imgUrl={fight[1].profile_image} />
              <br />
            </div>
          ))
        }
      </ReactSwipe>
    );
  }
}

export default SingleEvent;

