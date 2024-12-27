import { SET_EDGES } from '../actions/diagramActions';

const initialState = [];

const edgesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDGES:
      return action.payload;
    default:
      return state;
  }
};

export default edgesReducer;
