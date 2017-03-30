import { connect } from 'react-redux';
import Events from '../components/Events';
import { fadeIn, fadeOut, toggleFights } from '../action-creators/events';

const mapStateToProps = (state, ownProps) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fadeIn: (eventId) => {
      dispatch(fadeIn(eventId));
    },
    fadeOut: (eventId) => {
      dispatch(fadeOut(eventId));
    },
    toggleFights: (eventId) => {
      dispatch(toggleFights(eventId));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Events);

