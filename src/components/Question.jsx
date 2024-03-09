import React, { useState } from 'react';

const Question = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const renderInnerCircle = (isSelected) => {
    if (isSelected) {
      return (
        <div className="absolute inset-2  ring-4  max-sm-ring-4 max-sm:inset-2 rounded-full bg-[var(--lightblue)] ring-[var(--lightblue)]"></div>
      );
    }
    return null;
  };
  return (
    <div>
      <h3 className="text-xl text-[var(--primary)] my-4 max-sm:text-lg sm:text-lg md:text-2xl">
        {question.text}
      </h3>
      <ul className="text-xl text-[var(--primary)] font-normal space-y-3 my-6 max-sm:text-base max-sm:text-normal sm:text-lg md:text-xl">
        {question.Options.map((option) => (
          <li key={option.id}>
            <label
              className={`flex items-center cursor-pointer  mb-10 w-[100%] gap-3 ${
                selectedOption === option.id
                  ? 'bg-[var(--lightblue)] pr-3 rounded-full ring-2 ring-[var(--lightblue)] w-fit text-[var(--secondary)]'
                  : 'hover:bg-[var(--lightblue)] pr-3 text-[var(--primary)] rounded-full w-fit hover:text-[var(--secondary)]'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name={`question-${question.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              <div
                className={`max-w-7 max-h-7 min-h-7 min-w-7 my-auto mr-1 rounded-full transition duration-250 ease cursor-pointer relative ${
                  selectedOption === option.id
                    ? 'bg-slate-50 border-2 border-[var(--lightblue)] '
                    : 'bg-white border-2 text-gray-700 '
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
