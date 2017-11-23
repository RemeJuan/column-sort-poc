import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ClosedPanel = styled.div`
  background-color: #eee;
  width: 50px;
  height: 100vh;
  padding: 5px;
  cursor: pointer;
`;

const OpenPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  width: 340px;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

const ActionPanel = ({ isOpen, onClickHandler, children }) => (
  <span>
    {isOpen && (
      <OpenPanel>
        <ToggleButton onClick={onClickHandler}>Close</ToggleButton>
        {children}
      </OpenPanel>
    )}
    {!isOpen && <ClosedPanel onClick={onClickHandler}>Open</ClosedPanel>}
  </span>
);

ActionPanel.propTypes = {
  isOpen: PropTypes.bool,
};

ActionPanel.defaultProps = {
  isOpen: false,
};

export default ActionPanel;
