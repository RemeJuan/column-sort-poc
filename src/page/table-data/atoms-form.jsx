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
      <option value="">Select atom to add</option>
      {atoms.map(
        aa =>
          aa.active && (
            <option key={aa.value} value={JSON.stringify(aa)}>
              {aa.value}
            </option>
          )
      )}
    </select>
    <span>
      <label htmlFor="column-name">Name</label>
      <input type="text" name="column-name" required />
    </span>
    <button type="submit">Add</button>
  </Form>
);

export default AddColumnForm;
