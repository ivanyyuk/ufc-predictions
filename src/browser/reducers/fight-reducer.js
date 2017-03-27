import { RECEIVE_FIGHT } from '../action-creators/fight';

const initialFightState = {
  fighter1: {
    first_name: '',
    last_name: '',
    record: {
      wins: {
        total: ''
      },
      losses: {
        total: ''
      },
      draws: {
        total: ''
      }
    }
  },
  fighter2: {
    first_name: '',
    last_name: '',
    record: {
      wins: {
        total: ''
      },
      losses: {
        total: ''
      },
      draws: {
        total: ''
      }
    }
  }
};

export default (state = initialFightState, action) => {

  const newState = Object.assign({}, state);

  switch(action.type) {
    case (RECEIVE_FIGHT):
      newState.fighter1 = action.fighter1;
      newState.fighter2 = action.fighter2 ;
      return newState;

    default:
      return state;

  }
};
