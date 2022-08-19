import React, { useState, useEffect } from 'react'
import Pagination from '../shared/Pagination'
import QuestionCard from './QuestionCard'

const Questionaier = ({ questions_list }) => {
  const [questionNo, setQuestionNo] = useState(0)
  const [selectionList, setSelectionList] = useState([])
  const [result, setResult] = useState({ introvert: 0, extrovert: 0 })
  const accumalteResult = (type, value) => {
    if (type === 'int') {
      setResult({ ...result, introvert: (result.introvert += value) })
    }
    if (type === 'ext') {
      setResult({ ...result, extrovert: (result.extrovert += value) })
    }
  }
  const selectAnswer = (question_no, answer, answer_class) => {
    console.log("cloicked", question_no)
    setSelectionList({ ...selectionList, [question_no+1]: answer })
  }
  const navigateQuestion = (offset) => {
    console.log(questions_list.length)
    if (
      questionNo + offset > -1 &&
      questionNo + offset < questions_list.length
    ) {
      setQuestionNo(questionNo + offset)
    }
  }

  useEffect(() => {
    // console.log(result)
    console.log(selectionList)
  })
  return (
    <div className="questionaire-card text-center w-75">
      <h1 className="mt-3">Questionaier</h1>
      <span> question ({questionNo + 1}/10)</span>
      {questions_list.slice(questionNo, questionNo + 1).map((q) => {
        return (
          <QuestionCard
            question_no={questionNo}
            question={q?.text}
            answers={q?.answers}
            accumelator={accumalteResult}
            select={selectAnswer}
          />
        )
      })}
      <Pagination number={questionNo + 1} navigate={navigateQuestion} />
    </div>
  )
}

export default Questionaier
