import React from 'react';
import Question from './Question';

const Pillar = ({ pillar, onSelection }) => (
  <div className="space-y-2">
    <h2 className="font-black text-[var(--pink)] text-2xl text-center max-sm:text-xl sm:text-xl md:text-2xl">
      {pillar.pillar_name}
    </h2>
    {pillar.Questions.map((question) => (
      <Question
        key={question.id}
        question={question}
        pillarId={pillar.pillar_id}
        onSelection={onSelection}
      />
    ))}
  </div>
);

export default Pillar;
