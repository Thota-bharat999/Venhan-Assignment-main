export const ADD_NODE = 'ADD_NODE';
export const REMOVE_NODE = 'REMOVE_NODE';
export const EDIT_NODE = 'EDIT_NODE';
export const SET_EDGES = 'SET_EDGES';

export const addNode = (node) => ({
  type: ADD_NODE,
  payload: node,
});

export const removeNode = (nodeId) => ({
  type: REMOVE_NODE,
  payload: nodeId,
});

export const editNode = (nodeId, newLabel) => ({
  type: EDIT_NODE,
  payload: { nodeId, newLabel },
});

export const setEdges = (edges) => ({
  type: SET_EDGES,
  payload: edges,
});
