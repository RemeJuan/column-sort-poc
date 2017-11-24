import React from 'react';
import PropTypes from 'prop-types';
import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const trashAreaType = 'NodeType';
const trashAreaSpec = {
  drop: (props, monitor) => ({ ...monitor.getItem(), treeId: 'trash' }),
};
const trashAreaCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver({ shallow: true }),
});

const TrashAreaBaseComponent = ({ connectDropTarget, children, isOver }) =>
  connectDropTarget(
    <div
      style={{
        height: '80vh',
        background: isOver ? 'pink' : 'transparent',
      }}>
      {children}
    </div>
  );

TrashAreaBaseComponent.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOver: PropTypes.bool.isRequired,
};

const TrashAreaComponent = DropTarget(
  trashAreaType,
  trashAreaSpec,
  trashAreaCollect
)(TrashAreaBaseComponent);

const SortableComponent = ({ treeData, treeUpdate }) => (
  <TrashAreaComponent>
    <SortableTree
      treeData={treeData}
      onChange={treeData => treeUpdate(treeData)}
      canDrop={({ nextPath }) => nextPath.length === 1}
      dndType={trashAreaType}
    />
  </TrashAreaComponent>
);

export default DragDropContext(HTML5Backend)(SortableComponent);
