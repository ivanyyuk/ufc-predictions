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
        this.setState({fights: fights});})
      .catch(console.error);
  }

  render() {
    return(
      <ReactSwipe key={this.state.fights.length} swipeOptions={{continuos: true}}>
        {
          this.state.fights.map((fight,index) => (
            <div key={index} className='versus-page'>
              <Fighter name={`${fight[0].name.first} ${fight[0].name.last}`}
                record={`${fight[0].record.wins.total}-${fight[0].record.losses.total}-${fight[0].record.draws.total}`}
                imgUrl={fight[0].image_url} />
              <br />
              <h2>VS</h2>
              <Fighter name={`${fight[1].name.first} ${fight[1].name.last}`}
                record={`${fight[1].record.wins.total}-${fight[1].record.losses.total}-${fight[1].record.draws.total}`}
                imgUrl={fight[1].image_url} />
              <br />
            </div>
          ))
        }
      </ReactSwipe>
    );
  }
}

export default SingleEvent;

