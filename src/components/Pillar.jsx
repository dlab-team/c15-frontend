import React from 'react';
import Question from './Question';

const Pillar = ({ pillar }) => (
  <div className="space-y-10">
    {pillar.questions.map((question) => (
      <Question key={question.question.id} question={question} />
    ))}
  </div>
);

export default Pillar;
