import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  > * {
    margin: 10px;
  }
`;

const AddColumnForm = ({ atoms, addItem, ...rest }) => (
  <Form onSubmit={addItem} {...rest}>
    <select required>
      <option value="">Select item to sort by</option>
      {atoms.map(
        aa =>
          !aa.active && (
            <option key={aa.value} value={JSON.stringify(aa)}>
              {aa.value}
            </option>
          )
      )}
    </select>
    <select required>
      <option value="ASC">Ascending</option>
      <option value="DESC">Descending</option>
    </select>
    <button type="submit">Add</button>
  </Form>
);

export default AddColumnForm;
