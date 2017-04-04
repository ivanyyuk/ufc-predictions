import React from 'react';
import { connect } from 'react-redux';
import CommonOpponents from '../components/CommonOpponents';

const mapStateToProps = (state, ownProps)=> ({
  commonOpponents: state.currentPrediction.commonOpponents,
  fighter1: state.currentFight.fighter1,
  fighter2: state.currentFight.fighter2 
});

export default connect(mapStateToProps)(CommonOpponents);
