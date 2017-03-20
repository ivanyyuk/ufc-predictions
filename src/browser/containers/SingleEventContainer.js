import { connect } from 'react-redux';
import SingleEvent from '../components/SingleEvent';


const mapStateToProps = (state, ownProps) => ({
  currentEvent: state.currentEvent
});

export default connect(mapStateToProps)(SingleEvent);

