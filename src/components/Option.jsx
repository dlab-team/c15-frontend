import React from 'react';

const Option = ({ option, question }) => (
  <div>
    <label>
      <input
        type="radio"
        value={option.id}
        name={'question-' + String(question.id)}
      />
      {option.option}
    </label>
  </div>
);

export default Option;
