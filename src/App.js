import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fighter from './components/Fighter';
import axios from 'axios';
import EventBox from './components/EventBox';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      record: '',
      weightClass: '',
      thumbnailUrl: '',
      events:[]
    };
  }
  componentDidMount() {
    axios.get('/api/events')
      .then(events => this.setState({events: events.data}))
      .catch(console.error);
  }

  statify(fighter) {
    console.log(fighter.weight_class);
    this.setState({
      name: `${fighter.first_name} ${fighter.nickname} ${fighter.last_name}`,
      record: `${fighter.wins} - ${fighter.losses}`,
      weightClass: fighter.weight_class,
      thumbnailUrl: fighter.thumbnail
    });
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.events.map(event => (
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
  }
}

export default App;
