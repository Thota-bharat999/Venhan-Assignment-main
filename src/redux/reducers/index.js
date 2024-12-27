import { combineReducers } from 'redux';
import nodesReducer from './nodesReducer';
import edgesReducer from './edgesReducer';

const rootReducer = combineReducers({
  nodes: nodesReducer,
  edges: edgesReducer,
});

export default rootReducer;
