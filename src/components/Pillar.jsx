import React from 'react';
import Question from './Question';

const Pillar = ({ pillar }) => (
  <div className="space-y-2">
    <h2 className="text-bold text-2xl text-center sm:text-sm">
      {pillar.pillar_name}
    </h2>
    {pillar.questions.map((question) => (
      <Question key={question.question.id} question={question} />
    ))}
  </div>
);

export default Pillar;
