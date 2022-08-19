import React, { useState, useEffect } from 'react'

const Results = ({ complete, calcualte_results }) => {
  const [results, setResults] = useState({})
  const displayPersonlaity = () => {
    if (results?.int > results?.ext) {
      return 'Interovert'
    } else {
      return 'Extrovert'
    }
  }
  useEffect(() => {
    setResults(calcualte_results())
  }, [calcualte_results])
  return (
    <>
      <h2 className="mb-3">Results</h2>
      {complete ? (
        <>
          <p>results are</p>
          {results ? (
            <p className="h1">Your are an {displayPersonlaity()}</p>
          ) : null}
        </>
      ) : (
        <p> You need to answer all questions to get the results</p>
      )}
    </>
  )
}

export default Results
