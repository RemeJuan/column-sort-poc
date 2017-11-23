import React from 'react';
import styled from 'styled-components';
import SortableTree from 'react-sortable-tree';

import DynamicTable from '../table';
import Form from './form';
import ActionPanel from './action-panel';

const PageContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  min-height: 100vh;
`;

const TreeContainer = styled.div`height: 85vh;`;

const AtomForm = styled(Form)`height: 15vh;`;

const Page = ({
  availableAtoms,
  addItem,
  tableFields,
  treeData,
  sourceData,
  treeUpdate,
  togglePanel,
  manageActive,
}) => (
  <PageContainer>
    <ActionPanel isOpen={manageActive} onClickHandler={togglePanel}>
      <AtomForm atoms={availableAtoms} addItem={addItem} />
      <TreeContainer>
        <SortableTree
          treeData={treeData}
          onChange={treeData => treeUpdate(treeData)}
        />
      </TreeContainer>
    </ActionPanel>
    <DynamicTable
      headings={treeData.map(d => d.title)}
      displayColumns={treeData.map(d => d.atom)}
      data={sourceData}
    />
  </PageContainer>
);

export default Page;
