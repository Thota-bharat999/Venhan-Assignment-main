import { ADD_NODE, REMOVE_NODE, EDIT_NODE } from '../actions/diagramActions';

const initialState = [];

const nodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODE:
      return [...state, action.payload];
    case REMOVE_NODE:
      return state.filter((node) => node.id !== action.payload);
    case EDIT_NODE:
      return state.map((node) =>
        node.id === action.payload.nodeId
          ? { ...node, data: { ...node.data, label: action.payload.newLabel } }
          : node
      );
    default:
      return state;
  }
};

export default nodesReducer;
