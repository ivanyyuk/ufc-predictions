import React, { Component } from 'react';
import Prediction from '../components/Prediction';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPredictionFromServer } from '../action-creators/prediction';

const mapStateToProps = (state, ownProps) => ({
  currentFight: state.currentFight,
  currentPrediction: state.currentPrediction
});

const mapDispatchToProps = (dispatch) => ({
  getPredictionFromServer: (id1, id2) => {
    dispatch(getPredictionFromServer(id1,id2));
  }
});


class PredictionContainer extends Component{
  componentDidMount() {
   const {fighter1, fighter2} = this.props.currentFight;
    this.props.getPredictionFromServer(fighter1.id, fighter2.id);
  }

  render() {
    return(
      <Prediction
        commonOpponents={this.props.currentPrediction.commonOpponents}
        result={this.props.currentPrediction.result}
        fighter1={this.props.currentFight.fighter1}
        fighter2={this.props.currentFight.fighter2}
        />
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PredictionContainer);
