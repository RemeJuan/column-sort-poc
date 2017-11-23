import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TableHeadingHeading = styled.th``;

const TableHeading = ({ children, ...rest }) => (
  <TableHeadingHeading {...rest}>{children}</TableHeadingHeading>
);

TableHeading.propTypes = {
  children: PropTypes.any.isRequired
};

export default TableHeading;
