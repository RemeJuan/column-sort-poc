import React from 'react';

const TitleComponent = ({ data: { id, name, atom }, remove }) => (
  <div>
    <p>
      {name}: <small style={{ fontSize: '80%' }}>{atom.value}</small>
    </p>
    <button onClick={() => remove(id, atom)}>Delete</button>
  </div>
);

export default TitleComponent;
