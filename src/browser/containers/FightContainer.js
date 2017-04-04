import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleFight from '../components/SingleFight';
import { getFightInfo } from '../action-creators/fight';

const mapStateToProps = (state, ownProps) => ({
  currentFight: state.currentFight
});

const mapDispatchToProps = (dispatch) => ({
  getFightInfo: (id1, id2) => {
    dispatch(getFightInfo(id1,id2));
  }
});

class SingleFightContainer extends Component {
  componentDidMount() {
  const id1 = this.props.params.id1;
  const id2 = this.props.params.id2;
  this.props.getFightInfo(id1,id2);
  }

  render() {
    return (
      <SingleFight 
        currentFight={this.props.currentFight}
         id1={this.props.params.id1}
         id2={this.props.params.id2}
        />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFightContainer);
