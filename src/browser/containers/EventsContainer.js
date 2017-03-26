import { connect } from 'react-redux';
import Events from '../components/Events';
import { fadeInInfo } from '../action-creators/faded';

const mapStateToProps = (state, ownProps) => ({
  events: state.events,
  faded: state.faded
});

const mapDispatchToProps = (dispatch) => {
  return {
    fadeIn: () => {
      dispatch(fadeInInfo());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Events);

