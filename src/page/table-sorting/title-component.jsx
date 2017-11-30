import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
`;

const TitleComponent = ({ data: { id, name, atom }, order }) => (
  <TitleContainer>
    <p>
      {name}: <small style={{ fontSize: '80%' }}>{atom.value}</small>
    </p>
    <button onClick={() => order(id, atom.value, 'ASC')}>&#9650;</button>
    <button onClick={() => order(id, atom.value, 'DESC')}>&#9660;</button>
  </TitleContainer>
);

export default TitleComponent;
