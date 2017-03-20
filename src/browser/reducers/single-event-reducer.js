import { RECEIVE_SINGLE_EVENT } from '../action-creators/single-event';


const initialEventState = {
  name: '',
  fights: []
};

export default function (state = initialEventState, action) {

  let newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_SINGLE_EVENT:
      newState.name = action.name;
      newState.fights= [...action.fights];
      break;

    default:
      return state;

  }

  return newState;

}
