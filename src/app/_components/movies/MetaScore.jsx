import React from 'react'

const MetaScore = ({ score }) => {




  return (
    <div className="score-container">
      <svg className="circle-container" viewBox="2 -2 28 36" xmlns="http://www.w3.org/2000/svg">
        <circle className="circle-container__background" r="16" cx="16" cy="16"></circle>
        <circle
          className="circle-container__progress"
          r="16"
          cx="16"
          cy="16"
          style={{ strokeDashoffset: '0',  strokeDasharray: `${width} 100`  }}
        >
        </circle>
        <p className='score'>{width}%</p>
      </svg>
    </div>
  )

}

export default MetaScore