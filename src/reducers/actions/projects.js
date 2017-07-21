import axios from 'axios'
import {whoami} from './users'
import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, RECEIVE_USER_PROJECTS } from '../constants'
import { createNewProject, requestAllProjects, requestUserProjects,
         requestFilteredProjects, requestProject} from './loading'
import { gettingAllSkills } from './skills'

/* --------- PURE ACTION CREATORS ---------*/
export const receiveProject = project => ({
  project,
  type: RECEIVE_PROJECT
})
export const receiveAllProjects = projects => ({
  projects,
  loading: false,
  type: RECEIVE_ALL_PROJECTS
})

export const receiveUserProjects = projects => ({
  projects,
  loading: false,
  type: RECEIVE_USER_PROJECTS
})

/* --------- ASYNC ACTION CREATORS (THUNKS) ---------*/

export const gettingAllProjects = () => dispatch => {
  dispatch(requestAllProjects())
  axios.get('/api/projects')
  .then(res => res.data)
  .then(projects => dispatch(receiveAllProjects(projects)))
  .catch(err => console.error(`Mang, I couldn't find the projects! ${err.stack}`))
}


export const gettingUserProjects = (user) => dispatch => {
  dispatch(requestUserProjects())
  axios.get(`/api/projects/employer/${user.id}`)
  .then(res => res.data)
  .then(projects => dispatch(receiveUserProjects(projects)))
  .catch(err => console.error(`Mang, I couldn't find the projects! ${err.stack}`))
}

export const filteringProjects = query => dispatch => {
  dispatch(requestFilteredProjects())
  axios.post('/api/projects/search', {query})
  .then(res => res.data)
  .then(projects => dispatch(receiveAllProjects(projects)))
  .catch(err => console.error(`Mang, I couldn't filter the  projects! ${err.stack}`))
}


export const gettingProjectById = project_id => dispatch => {
  dispatch(requestProject())
  axios.get(`/api/projects/${project_id}`)
  .then(res => res.data)
  .then(project => {
    dispatch(receiveProject(project))
    dispatch(gettingAllSkills())
  })
  .catch(err => console.error(`Mang I couldn't find the project! ${err.stack}`))
}

export const creatingNewProject = projectPost => dispatch => {
  //set loading state to true to trigger UI changes
  dispatch(createNewProject())
  // create the new project
  axios.post('/api/projects', projectPost)
  .then(res => res.data)
  // if the project is successfully created, we receive the update to date projects list
  .then(projects => console.log("YES WE DONE"))
  .then(() => dispatch(whoami()))
  // otherwise we catch the error...
  .catch(err => console.error(`Sorry, cuz. We couldn't create that project post...${err.stack}`))
}

export const updatingProject = (postData, history) => dispatch => {
  axios.put(`/api/projects/${postData.project.id}`, postData)
  .then(() => {
    history.push('/dashboard')
  })
  .catch(err => console.error(`Sorry, cuz. Couldn't update that project post...${err.stack}`))
}

export const deletingProject = (id, history) => dispatch => {
  axios.delete(`/api/projects/${id}`)
  .then(() => {
    history.push('/dashboard')
  })
  .catch(err => console.error(`Sorry, cuz. Couldn't delete that project post...${err.stack}`))
}
