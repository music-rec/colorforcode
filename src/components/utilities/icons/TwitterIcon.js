import React from 'react'
import PropTypes from 'prop-types'

const Twitter = () => (
  <svg className='twitter' x='0px' y='0px' width='30px' height='24px' viewBox='-4.98 -0.5 41.96 33' enableBackground='new -4.98 -0.5 41.96 33'>
    <path d='M8.624,32c-4.403,0-8.807-1.205-12.683-3.614c-0.352-0.172-0.529-0.689-0.352-1.032s0.529-0.689,0.881-0.516c3.171,0.344,6.517-0.344,9.335-1.72c-2.642-0.86-4.932-2.925-5.813-5.677c-0.177-0.344,0-0.689,0.177-0.86s0.352-0.172,0.529-0.344c-2.113-1.549-3.523-4.129-3.523-6.71c0-0.344,0.177-0.689,0.352-0.86c0.352,0,0.704,0,0.881,0.172c0.177,0,0.177,0,0.352,0c-1.057-1.376-1.585-2.925-1.585-4.817c0-1.549,0.352-2.925,1.233-4.301c0.177-0.172,0.352-0.344,0.704-0.344S-0.36,1.548-0.184,1.72c3.699,4.301,8.983,7.054,14.619,7.57c0-0.344,0-0.516,0-0.86c0-4.645,3.875-8.43,8.807-8.43c2.29,0,4.403,0.86,6.165,2.409c1.585-0.344,2.994-0.86,4.403-1.72c0.352-0.172,0.704-0.172,1.057,0c0.352,0.172,0.352,0.516,0.352,0.86c-0.352,0.86-0.704,1.72-1.233,2.409c0.352-0.172,0.704-0.344,1.233-0.516c0.352-0.172,0.704,0,1.057,0.172c0.177,0.344,0.352,0.689,0,1.032c-1.057,1.549-2.29,2.753-3.875,3.957c0,0.172,0,0.344,0,0.516C32.227,20.473,23.42,32,8.624,32z'
    />
  </svg>
)

Twitter.propTypes = {
  fill: PropTypes.string, // this is the fill color for CSS use
  width: PropTypes.string,
  height: PropTypes.string
}

export default Twitter
