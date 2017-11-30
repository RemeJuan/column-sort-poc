import React from 'react';
import PropTypes from 'prop-types';
import SortableTree from 'react-sortable-tree';

import TitleComponent from './title-component';

const SortableComponent = ({ treeData, treeUpdate, orderData }) => {
  const data = treeData.map(d => {
    const data = {
      id: d.id,
      name: d.name,
      atom: d.atom,
    };

    return {
      title: <TitleComponent key={d.id} data={data} order={orderData} />,
      ...data,
    };
  });

  return (
    <div
      style={{
        height: '100vh',
      }}>
      <SortableTree
        treeData={data}
        onChange={treeData => treeUpdate(treeData)}
        canDrop={({ nextPath }) => nextPath.length === 1}
      />
    </div>
  );
};

SortableComponent.propTypes = {
  treeData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  treeUpdate: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default SortableComponent;
