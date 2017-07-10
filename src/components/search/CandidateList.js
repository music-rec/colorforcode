import React from 'react'
// import './Home.css'
import { Row, Col, Button, Glyphicon } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// import './Home.css'
// import './JobCard.css'

const CandidateList = props => {
  return (
  <div className='JobList'>
    {props.filtered &&
      <div className='search-header'>
        <Row>
          <h2>Search Results</h2>
          <Col className='search-chip-container' xs={12} sm={12} md={12} lg={12}>
            {props.terms && props.terms.map((term, i) => (
                <Button key={i} className='search-chip' value={term} onClick={props.clearChip}>
                  <Glyphicon glyph="remove-sign" /> {term}
                </Button>
            ))}
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Button bsStyle='warning' onClick={(event, filter) => props.clearFilter(filter)}>
              Reset search results
            </Button>
          </Col>
        </Row>
      </div>
    }
    {props.users && props.users.map((data, i) => {
      const user = data._source
      return (
        <LinkContainer className='JobCard' key={i} to={`/users/${user.id}`}>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
             <h2 className='JobCard-title'>{user.email} {user.first_name} {user.last_name}</h2>
             <p className='JobCard-skills'>{user.projects.map(p => p.title).join(', ')}</p>
           </Col>

         </Row>
        </LinkContainer>
      )
    })}
  </div>
)}

// <Col xs={12} sm={6} md={6} lg={6}>
//   <Row>
//     <Col xs={12} sm={6} md={6} lg={6}>
//       <h2 className='JobCard-payrate'>
//         {user.first_name}
//       </h2>
//     </Col>
//     <Col xs={12} sm={6} md={6} lg={6}>
//       <p className='JobCard-location'>{`${job.city}, ${job.state}`}</p>
//       {job.employment_types && job.employment_types.map((type, i) => (
//         <span key={i} className='JobCard-type'>{type}</span>
//       ))}
//     </Col>
//   </Row>
// </Col>

export default CandidateList
