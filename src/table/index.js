import React from 'react';
import PropTypes from 'prop-types';

import TableColumn from './table-column';
import TableHeading from './table-heading';
import TableRow from './table-row';
import Table from './table';

const DynamicTable = ({
  headings,
  displayColumns,
  data,
  className,
  onChangeHander,
}) => (
  <Table className={className}>
    {headings && (
      <TableRow>
        {headings.map(heading => (
          <TableHeading key={heading}>{heading}</TableHeading>
        ))}
      </TableRow>
    )}
    <TableRow>
      {displayColumns.map(col => (
        <TableColumn key={col}>
          <input
            type="text"
            placeholder="filter"
            onChange={e => onChangeHander(e.target.value, col)}
          />
        </TableColumn>
      ))}
    </TableRow>
    {data.map((d, i) => (
      <TableRow key={displayColumns[i]}>
        {displayColumns.map(col => (
          <TableColumn key={col}>{d[col]}</TableColumn>
        ))}
      </TableRow>
    ))}
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
