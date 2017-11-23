import React from 'react';
import PropTypes from 'prop-types';

import TableColumn from './table-column';
import TableHeading from './table-heading';
import TableRow from './table-row';
import Table from './table';

const DynamicTable = ({ headings, displayColumns, data, className }) => (
  <Table className={className}>
    {headings &&
      <TableRow>
        {headings.map(heading => (
          <TableHeading key={heading}>{heading}</TableHeading>
        ))}
      </TableRow>
    }
    {data.map((d, i) => {
      const columns = displayColumns || Object.keys(d);
      return (
        <TableRow key={columns[i]}>
          {columns.map(col => (
            <TableColumn key={col}>{d[col]}</TableColumn>
          ))}
        </TableRow>
      );
    })}
  </Table>
);

DynamicTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  displayColumns: PropTypes.arrayOf(PropTypes.string),
  headings: PropTypes.arrayOf(PropTypes.string),
};

DynamicTable.defaultProps = {
  displayColumns: undefined,
  headings: undefined,
};

export default DynamicTable;