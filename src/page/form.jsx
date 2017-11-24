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
      {console.log(atoms)}
      <option value="">Make Selection</option>
      {atoms.map(aa => (
        <option key={aa} value={aa}>
          {aa}
        </option>
      ))}
    </select>
    <span>
      <label htmlFor="column-name">Name</label>
      <input type="text" name="column-name" required />
    </span>
    <button type="submit">Add</button>
  </Form>
);

export default AddColumnForm;
