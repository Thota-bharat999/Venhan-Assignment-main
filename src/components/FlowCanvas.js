import React, { useState, useCallback } from 'react';
import 'reactflow/dist/style.css';
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import './FlowCanvas.css';

const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodeLabel, setNodeLabel] = useState('');
  const [editingNodeId, setEditingNodeId] = useState(null);
  const [nodeToRemove, setNodeToRemove] = useState(null); 
  
  const addNode = () => {
    if (!nodeLabel) {
      alert('Node label cannot be empty');
      return;
    }
    const newNode = {
      id: uuidv4(),
      data: { label: nodeLabel },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => [...nds, newNode]);
    setNodeLabel(''); 
  };

  const removeNode = () => {
    if (nodeToRemove) {
      setNodes((nds) => nds.filter((node) => node.id !== nodeToRemove));

      setEdges((eds) => eds.filter((edge) => edge.source !== nodeToRemove && edge.target !== nodeToRemove));

      setNodeToRemove(null);
    }
  };

  const startEditingNode = (nodeId) => {
    setEditingNodeId(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    setNodeLabel(node?.data.label || '');
  };

  const saveEditedNode = () => {
    if (!nodeLabel) {
      alert('Node label cannot be empty');
      return;
    }
    setNodes((nds) =>
      nds.map((node) =>
        node.id === editingNodeId ? { ...node, data: { ...node.data, label: nodeLabel } } : node
      )
    );
    setEditingNodeId(null);
    setNodeLabel('');
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = (event, node) => {
    setNodeToRemove(node.id); 
  };

  return (
    <div className="diagram-container">
      <div className="sidebar">
        <h2>Node Management</h2>
        <input
          type="text"
          className="node-input"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
          placeholder="Enter Node Label"
        />
        <div className="buttons">
          <button
            className="add-node-btn"
            onClick={addNode}
            disabled={!!editingNodeId} 
          >
            Add Node
          </button>
          <br />
          {editingNodeId && (
            <button className="save-edit-btn" onClick={saveEditedNode}>
              Save Edit
            </button>
          )}
          {nodeToRemove && !editingNodeId && (
            <button
              className="remove-node-btn"
              onClick={removeNode}  
            >
              Remove Node
            </button>
          )}
        </div>
      </div>

      <div className="flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDoubleClick={(event, node) => startEditingNode(node.id)}
          onNodeClick={onNodeClick} 
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowCanvas;
