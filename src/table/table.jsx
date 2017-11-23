import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TableContainer = styled.table``;
const TableBody = styled.tbody`
  td, th {
    width: 45%;
    text-align: left;
  }
`;

const Table = ({ children, ...rest }) => (
  <TableContainer {...rest}>
    <TableBody {...rest}>{children}</TableBody>
  </TableContainer>
);

Table.propTypes = {
  children: PropTypes.any.isRequired
};

export default Table;
