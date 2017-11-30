import React from 'react';
import styled from 'styled-components';

import DynamicTable from '../table';
import AtomsForm from './table-data/atoms-form';
import TableDataTree from './table-data/sortable-tree';

import TableSortingTree from './table-sorting/sortable-tree';

import ActionPanel from './action-panel';

const PageContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  min-height: calc(100vh - 30px);
`;

const AtomForm = styled(AtomsForm)`height: 20vh;`;

const Page = ({
  availableAtoms,
  addItem,
  treeData,
  tableData,
  sortData,
  treeUpdate,
  sortUpdate,
  togglePanel,
  manageActive,
  tableFilter,
  deleteItemFromTable,
  dataSorting,
}) => (
  <PageContainer>
    <ActionPanel isOpen onClickHandler={togglePanel}>
      <AtomForm atoms={availableAtoms} addItem={addItem} />
      <TableDataTree
        treeData={treeData}
        treeUpdate={treeUpdate}
        removeItem={deleteItemFromTable}
      />
    </ActionPanel>

    <ActionPanel isOpen onClickHandler={togglePanel}>
      <h1>Data sorting</h1>
      <TableSortingTree
        treeData={sortData}
        treeUpdate={sortUpdate}
        orderData={dataSorting}
      />
    </ActionPanel>

    {treeData.length > 0 && (
      <DynamicTable
        headings={treeData.map(d => d.name)}
        displayColumns={treeData.map(t => t.atom.value)}
        data={tableData}
        onChangeHander={tableFilter}
      />
    )}
  </PageContainer>
);

export default Page;
