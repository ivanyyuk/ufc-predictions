import { FADE_IN_INFO } from '../action-creators/faded';

const initialFadedState = false;

export default (state = initialFadedState, action) => {
  switch(action.type) {
    case(FADE_IN_INFO):
      return true;

    default:
      return state;
  };
};
