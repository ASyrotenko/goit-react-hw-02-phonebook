import React from 'react';

const Filter = ({ title, value, onChange }) => {
  return (
    <label>
      {title}
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
