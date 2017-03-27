import { connect } from 'react-redux';
import SingleFight from '../components/SingleFight';

const mapStateToProps = (state, ownProps) => ({
  currentFight: state.currentFight
});

export default connect(mapStateToProps)(SingleFight);
