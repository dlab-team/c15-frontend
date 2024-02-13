import React, { useState } from 'react';

const Question = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h3 className="text-lg font-medium my-4">{question.question.text}</h3>
      <ul className="text-lg font-normal space-y-3 my-6">
        {question.options.map((option) => (
          <li key={option.id}>
            <label>
              <input
                className="border-grey-600 focus:ring-lime-500 text-[#6ead15] mr-1 align-[-1px]"
                type="radio"
                name={`question-${question.question.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              {option.option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
