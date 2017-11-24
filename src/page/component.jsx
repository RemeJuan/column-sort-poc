import React from 'react';
import styled from 'styled-components';

import DynamicTable from '../table';
import Form from './form';
import ActionPanel from './action-panel';
import SortableComponent from './sortable-tree';

const PageContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  min-height: calc(100vh - 30px);
`;

const AtomForm = styled(Form)`height: 15vh;`;

const Delete = styled.div`height: 5vh;`;

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
    <ActionPanel isOpen onClickHandler={togglePanel}>
      <AtomForm atoms={availableAtoms} addItem={addItem} />
      <SortableComponent treeData={treeData} treeUpdate={treeUpdate} />
      <Delete>Drop To Delete</Delete>
    </ActionPanel>
    {treeData.length > 0 && (
      <DynamicTable
        headings={treeData.map(d => d.title)}
        displayColumns={treeData.map(d => d.atom)}
        data={sourceData}
      />
    )}
  </PageContainer>
);

export default Page;
