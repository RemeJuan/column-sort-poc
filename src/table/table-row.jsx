import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TableRowRow = styled.tr``;

const TableRow = ({ children, ...rest }) => (
  <TableRowRow {...rest}>{children}</TableRowRow>
);

TableRow.propTypes = {
  children: PropTypes.any.isRequired
};
export default TableRow;
