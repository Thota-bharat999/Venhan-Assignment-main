// src/redux/diagramSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nodes: [],
  edges: [],
};

const diagramSlice = createSlice({
  name: 'diagram',
  initialState,
  reducers: {
    addNode: (state, action) => {
      const newNode = {
        id: `${state.nodes.length + 1}`,
        data: { label: action.payload.label },
        position: { x: 250, y: 100 }, 
      };
      state.nodes.push(newNode);
    },
    removeNode: (state, action) => {
      state.nodes = state.nodes.filter(node => node.id !== action.payload.id);
    },
    updateNodeLabel: (state, action) => {
      const { id, newLabel } = action.payload;
      const node = state.nodes.find(node => node.id === id);
      if (node) {
        node.data.label = newLabel;
      }
    },
    updateNodePosition: (state, action) => {
      const { id, position } = action.payload;
      const node = state.nodes.find(node => node.id === id);
      if (node) {
        node.position = position;
      }
    },
    addEdge: (state, action) => {
      state.edges.push(action.payload);
    },
  },
});

export const { addNode, removeNode, updateNodeLabel, updateNodePosition, addEdge } = diagramSlice.actions;

export default diagramSlice.reducer;
