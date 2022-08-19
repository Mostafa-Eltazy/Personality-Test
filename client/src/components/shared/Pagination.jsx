import React from 'react'

const Pagination = ({ number, navigate }) => {
  return (
    <div className="mt-4 mb-3 d-sm-flex justify-content-center align-items-baseline">
      <button className="btn btn-primary mb-2" onClick={() => navigate(-1)}>
        {' '}
        Previous{' '}
      </button>
      <p className='mx-4 my-1'>{number}</p>
      <button className="btn btn-primary mb-2" onClick={() => navigate(+1)}>
        {' '}
        Next{' '}
      </button>
    </div>
  )
}

export default Pagination
