import React, { useState } from 'react';

const Question = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const renderInnerCircle = (isSelected) => {
    if (isSelected) {
      return (
        <div className="absolute inset-2  ring-4  max-sm-ring-4 max-sm:inset-2 rounded-full bg-[#6EAD15] ring-[#6EAD15] max-sm:bg-[#E97D00] max-sm:ring-[#E97D00] sm:bg-[#E97D00] sm:ring-[#E97D00] lg:bg-[#6EAD15] lg:ring-[#6EAD15]"></div>
      );
    }
    return null;
  };
  return (
    <div>
      <h3 className="text-xl font-normal my-4 max-sm:text-lg sm:text-lg md:text-2xl">
        {question.question.text}
      </h3>
      <ul className="text-xl font-normal space-y-3 my-6 max-sm:text-base max-sm:text-normal sm:text-lg md:text-xl">
        {question.options.map((option) => (
          <li key={option.id}>
            <label
              className={`flex items-center cursor-pointer font-semibold mb-10 w-[600px] max-sm:w-[450px] sm:w-[550px] md:w-[700px] ${
                selectedOption === option.id
                  ? 'bg-[#6EAD15] rounded-full ring-2  ring-[#6EAD15] w-30 text-slate-50 max-sm:bg-[#E97D00] max-sm:ring-[#E97D00] sm:bg-[#E97D00] sm:ring-[#E97D00]  lg:bg-[#6EAD15] lg:ring-[#6EAD15]'
                  : 'hover:bg-[#8DA16F] text-gray-500 hover:text-gray-600 rounded-full w-40 '
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name={`question-${question.question.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              <div
                className={`w-7 h-7 mr-1 rounded-full transition duration-250 ease cursor-pointer relative max-sm:w-6 max-sm:h-6 ${
                  selectedOption === option.id
                    ? 'bg-slate-50 border-2 border-[#6EAD15] max-sm:border-[#E97D00] sm:border-[#E97D00] lg:border-[#6EAD15] xl:border-[#6EAD15]'
                    : 'bg-white border-2  border-[#8DA16F]  text-gray-700 max-sm:border-[#E97D00] max-sm:border-opacity-50 sm:border-[#E97D00] sm:border-opacity-50 lg:border-[#8DA16F] '
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
