import React, { useState } from 'react';

const Question = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const renderInnerCircle = (isSelected) => {
    if (isSelected) {
      return (
        <div className="absolute inset-2 bg-[#6EAD15] ring-2 rounded-full ring-[#6EAD15]"></div>
      );
    }
    return null;
  };
  return (
    <div>
      <h3 className="text-lg font-medium my-4">{question.question.text}</h3>
      <ul className="text-lg font-normal space-y-3 my-6">
        {question.options.map((option) => (
          <li key={option.id}>
            <label
              className={`flex items-center cursor-pointer font-semibold mb-10 w-[550px] ${
                selectedOption === option.id
                  ? 'bg-[#6EAD15] rounded-full ring-2  ring-[#6EAD15] w-40 text-slate-50'
                  : 'hover:bg-[#8DA16F] text-gray-500 hover:text-gray-600 rounded-full w-40'
              }`}
            >
              <input
                className="border-grey-600 focus:ring-lime-500 text-[#6ead15] mr-1 align-[-1px] hidden"
                type="radio"
                name={`question-${question.question.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              <div
                className={`w-8 h-8 mr-1 rounded-full transition duration-250 ease cursor-pointer relative ${
                  selectedOption === option.id
                    ? 'bg-slate-50 border-2 border-[#6EAD15]'
                    : 'bg-white border-2 border-[#8DA16F] text-gray-700'
                }`}
              >
                {renderInnerCircle(selectedOption === option.id)}
              </div>
              {option.option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
