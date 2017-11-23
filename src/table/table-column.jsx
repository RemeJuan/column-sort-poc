import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TableColumnColumn = styled.td``;

const TableColumn = ({ children, ...rest }) => (
  <TableColumnColumn {...rest}>{children}</TableColumnColumn>
);

TableColumn.propTypes = {
  children: PropTypes.any.isRequired
};

export default TableColumn;
