import React from 'react'

const QuestionCard = ({
  question_no,
  question,
  answers,
  accumelator,
  select,
}) => {
  return (
    <div className="mt-4 px-4 question-card">
      <h4 className="mt-3 mb-4">{question}</h4>
      <div className="mt-4 mb-3">
        {answers?.map((a) => {
          return (
            <p
              className="question-card_answer p-3"
              onClick={() => {
                select(question_no, a, a.class)
              }}
            >
              {' '}
              {a.text}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionCard
