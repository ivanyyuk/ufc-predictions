import React from 'react';
import axios from 'axios';
import ReactSwipe from 'react-swipe';

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
            <div key={index}>
              <p>{fight[0].first_name} {fight[0].nickname} {fight[0].last_name}</p>
              <br />
              <p>{fight[1].first_name} {fight[1].nickname} {fight[1].last_name}</p>
            </div>
          ))
        }
      </ReactSwipe>
    );
  }
}

export default SingleEvent;

