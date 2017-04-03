import React, { Component } from 'react';
import { connect } from 'react-redux';
import Events from '../components/Events';
import axios from 'axios';
import { fadeIn, fadeOut, toggleFights, receiveEvents } from '../action-creators/events';

const mapStateToProps = (state, ownProps) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
    fadeIn: (eventId) => {
      dispatch(fadeIn(eventId));
    },
    fadeOut: (eventId) => {
      dispatch(fadeOut(eventId));
    },
    toggleFights: (eventId) => {
      dispatch(toggleFights(eventId));
    },
    receiveEvents: (events) => {
      dispatch(receiveEvents(events));
    }
});

class EventsContainer extends Component {
  componentDidMount() {
    axios.get('/api/events')
      .then(res => res.data)
      .then(events => this.props.receiveEvents(events))
      .catch(console.error);
  }

  render() {
    return (
      <Events 
        events={this.props.events}
        fadeIn={this.props.fadeIn}
        fadeOut={this.props.fadeOut}
        toggleFights={this.props.toggleFights} 
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);

