import React, { useState, useEffect } from 'react'
import Pagination from '../shared/Pagination'
import QuestionCard from './QuestionCard'
import Results from './Results'

const Questionaier = ({ questions_list }) => {
  const [questionNo, setQuestionNo] = useState(0)
  const [selectionList, setSelectionList] = useState({})
  const choices = Object.values(selectionList)
  const calculateResult = () => {
    let int = 0
    let ext = 0
    for (let answer in selectionList) {
      console.log(selectionList[answer])
      if (selectionList[answer].type === 'int') {
        int += selectionList[answer].value
      }
      if (selectionList[answer].type === 'ext') {
        ext += selectionList[answer].value
      }
    }
    return { int, ext }
  }
  const selectAnswer = (question_no, answer) => {
    setSelectionList({ ...selectionList, [question_no]: answer })
  }
  const navigateQuestion = (offset) => {
    console.log(questions_list.length)
    if (
      questionNo + offset > -1 &&
      questionNo + offset < questions_list.length + 1
    ) {
      setQuestionNo(questionNo + offset)
    }
  }

  useEffect(() => {
    console.log(
      'sda',
      Object.keys(selectionList).length === questions_list.length,
    )
  })
  return (
    <div className="questionaire-card text-center w-75">
      <h1 className="mt-3">Questionaier</h1>

      {questionNo > questions_list.length - 1 ? (
        <Results
          complete={Object.keys(selectionList).length === questions_list.length}
          calcualte_results={calculateResult}
        />
      ) : (
        <>
          <span> question ({questionNo + 1}/{questions_list.length})</span>
          {questions_list.slice(questionNo, questionNo + 1).map((q) => {
            return (
              <QuestionCard
                question_no={questionNo}
                question={q?.text}
                answers={q?.answers}
                selection={
                  choices?.find((e, index) => {
                    return index === questionNo
                  }) ?? ''
                }
                select={selectAnswer}
              />
            )
          })}
        </>
      )}
      <Pagination
        number={questionNo + 1}
        navigate={navigateQuestion}
        overbound={questionNo > questions_list.length - 1}
        underbound={questionNo === 0}
      />
    </div>
  )
}

export default Questionaier
