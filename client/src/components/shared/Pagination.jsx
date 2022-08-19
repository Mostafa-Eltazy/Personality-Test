import React from 'react'

const Pagination = ({ number, navigate ,overbound, underbound }) => {
  return (
    <div className="mt-4 mb-3 d-sm-flex justify-content-around align-items-baseline">
      <button className="btn btn-primary mb-2" onClick={() => navigate(-1)} disabled={underbound}>
        {' '}
        Previous{' '}
      </button>
      <button className="btn btn-primary mb-2" onClick={() => navigate(+1)} disabled={overbound}>
        {' '}
        Next{' '}
      </button>
    </div>
  )
}

export default Pagination
