import React, { createContext, useState } from 'react';

export const DiagramContext = createContext();

const DiagramContextProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <DiagramContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
      {children}
    </DiagramContext.Provider>
  );
};

export default DiagramContextProvider;
