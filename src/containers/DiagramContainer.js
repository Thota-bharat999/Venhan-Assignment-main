import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNode, removeNode, editNode, setEdges } from '../redux/actions/diagramActions';
import FlowCanvas from '../components/FlowCanvas';
import NodeManagement from '../components/NodeManagement';

const DiagramContainer = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes);
  const edges = useSelector((state) => state.edges);

  const onAddNode = (label) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: label || `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    dispatch(addNode(newNode));
  };

  const onRemoveNode = (label) => {
    const nodeToRemove = nodes.find((node) => node.data.label === label);
    if (nodeToRemove) {
      dispatch(removeNode(nodeToRemove.id));
    }
  };

  const onEditNode = (nodeId, newLabel) => {
    dispatch(editNode(nodeId, newLabel));
  };

  const onSetEdges = useCallback(
    (newEdges) => dispatch(setEdges(newEdges)),
    [dispatch]
  );

  return (
    <div className="diagram-container">
      <NodeManagement
        onAddNode={onAddNode}
        onRemoveNode={onRemoveNode}
        onEditNode={onEditNode}
      />
      <FlowCanvas
        nodes={nodes}
        edges={edges}
        onNodesChange={(updatedNodes) => dispatch(addNode(updatedNodes))}
        onEdgesChange={(updatedEdges) => onSetEdges(updatedEdges)}
      />
    </div>
  );
};

export default DiagramContainer;
