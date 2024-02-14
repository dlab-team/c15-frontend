import React, { useState } from 'react';

const Question = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const renderInnerCircle = (isSelected) => {
    if (isSelected) {
      return (
        <div className="absolute inset-2 bg-[#6EAD15] ring-4 rounded-full ring-[#6EAD15] sm:bg-[#E97D00] sm:ring-[#E97D00]"></div>
      );
    }
    return null;
  };
  return (
    <div>
      <h3 className="text-lg font-normal my-4 sm:text-sm">
        {question.question.text}
      </h3>
      <ul className="text-sm font-normal space-y-3 my-6">
        {question.options.map((option) => (
          <li key={option.id}>
            <label
              className={`flex items-center cursor-pointer font-semibold mb-10 w-[450px] ${
                selectedOption === option.id
                  ? 'bg-[#6EAD15] rounded-full ring-2  ring-[#6EAD15] w-40 text-slate-50 sm:bg-[#E97D00] sm:ring-[#E97D00]'
                  : 'hover:bg-[#8DA16F] text-gray-500 hover:text-gray-600 rounded-full w-40 '
              }`}
            >
              <input
                className="hidden "
                type="radio"
                name={`question-${question.question.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              <div
                className={`w-6 h-6 mr-1 rounded-full transition duration-250 ease cursor-pointer relative ${
                  selectedOption === option.id
                    ? 'bg-slate-50 border-2 border-[#6EAD15] sm:border-[#E97D00] '
                    : 'bg-white border-2 border-[#8DA16F] text-gray-700 sm:border-[#E97D00] sm:border-opacity-50'
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
