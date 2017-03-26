import { connect } from 'react-redux';
import Events from '../components/Events';
import { toggleFade } from '../action-creators/events';

const mapStateToProps = (state, ownProps) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFade: (eventId) => {
      dispatch(toggleFade(eventId));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Events);

