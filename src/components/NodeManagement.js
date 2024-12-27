import React, { useState } from 'react';

const NodeManagement = ({
  onAddNode,
  onRemoveNode,
  onEditNode,
  editingNodeId,
  setEditingNodeId,
}) => {
  const [nodeLabel, setNodeLabel] = useState('');

  const handleAddNode = () => {
    onAddNode(nodeLabel);
    setNodeLabel('');
  };

  const handleRemoveNode = () => {
    onRemoveNode(nodeLabel);
    setNodeLabel('');
  };

  const handleSaveEdit = () => {
    onEditNode(editingNodeId, nodeLabel);
    setEditingNodeId(null);
    setNodeLabel('');
  };

  return (
    <div className="node-management">
      <h1 className='node-heading'>Node Management</h1>
      <input
        type="text"
        value={nodeLabel}
        onChange={(e) => setNodeLabel(e.target.value)}
        placeholder="Enter Node Label"
      />
      <button onClick={handleAddNode} disabled={!!editingNodeId}>
        Add Node
      </button>
      <button onClick={handleRemoveNode} disabled={!nodeLabel}>
        Remove Node
      </button>
      {editingNodeId && (
        <button onClick={handleSaveEdit}>
          Save Edit
        </button>
      )}
    </div>
  );
};

export default NodeManagement;
