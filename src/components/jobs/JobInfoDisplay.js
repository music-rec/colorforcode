import React, {Component} from 'react'
import { connect } from 'react-redux'
import { gettingJobById, applyingToJob } from 'APP/src/reducers/actions/jobs'

class JobInfoDisplay extends Component {

  componentDidMount(){
    this.props.getJob(this.props.job_id);
  }

  applyToJob(){
    this.props.sendApplication(this.props.user.id, this.props.job.id, this.props.history)
  }

  render(){
    const job = this.props.job
    const employer = job ? this.props.job.employer : null
    const skills = job ? this.props.job.skills : null
    const skill_list = []
    if (skills) {
      skills.forEach((skill) => {
        skill_list.push(
          <li key={skill.id}>{skill.title}</li>
        )
      })
    }
    return(
      <div id='job-display'>
        {this.props.loading === false && job &&
          <div>
            <h1>Title: {job.title}</h1>
            {employer &&
              <h3>Company: {employer.name}</h3>}
            <p>Description: {job.description}</p>
            {job.state && job.city &&
              <p>{job.city}, {job.state} {job.country}</p>
            }
            <p>Telecommute: {job.remote ? "Yes" : "No"}</p>
            <p>Pay Rate: {job.pay_rate}</p>
            <p>Compensation: {job.compensation}</p>
            <p>Travel Requirements: {job.travel_requirements}</p>
            <p>Posted Since: {job.created_at}</p>

            {skills && <ul>{skill_list.map(skill => skill)}</ul>}
            {this.props.user && this.props.user.is_employer === false &&
              <button onClick={this.applyToJob.bind(this)}>Apply</button>
            }
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user:state.users.currentUser,
  job: state.jobs.currentJob,
  loading: state.loading,
  history: state.router.history,
})

const mapDispatchToProps = dispatch => ({
  getJob: job_id => dispatch(gettingJobById(job_id)),
  sendApplication: (user_id, job_id, history) => dispatch(applyingToJob(user_id, job_id, history)),
})

const JobInfoDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(JobInfoDisplay)

export default JobInfoDisplayContainer
