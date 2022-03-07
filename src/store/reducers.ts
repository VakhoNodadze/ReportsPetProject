import { 
  FAIL_GATEWAYS,
  FAIL_PROJECTS,
  FAIL_REPORT_POST,
  FAIL_USERS,
  FETCH_GATEWAYS_REQUEST,
  FETCH_PROJECTS_REQUEST,
  FETCH_USERS_REQUEST,
  POST_REPORT,
  POST_REPORT_REQUEST,
  SET_GATEWAYS,
  SET_PROJECTS,
  SET_USERS
} from './actionTypes'

import { ACTION_TYPE, STATE } from './types'

const initialState: STATE = {
  gateways: null,
  loadingGateways: false,
  gatewaysError: null,

  projects: null,
  loadingProject: false,
  projectsError: null,

  report: null,
  loadingReports: false,
  reportsError: null,

  users: null,
  loadingUsers: false,
  usersError: null
}

const reducer = (state = initialState, action: ACTION_TYPE) => {
  switch(action.type){
  case FETCH_USERS_REQUEST:
    return { ...state, loadingUsers: true }
  case SET_USERS:
    return { ...state, loadingUsers: false, users: action.users }
  case FAIL_USERS:
    return { ...state, loadingUsers: false, usersError: action.error }
  case FETCH_GATEWAYS_REQUEST:
    return { ...state, loadingGateways: true }
  case SET_GATEWAYS:
    return { ...state, loadingGateways: false, gateways: action.gateways }
  case FAIL_GATEWAYS:
    return { ...state, loadingGateways: false, gatewaysError: action.error }
  case FETCH_PROJECTS_REQUEST:
    return { ...state, loadingProject: true }
  case SET_PROJECTS:
    return { ...state, loadingProject: false, projects: action.projects }
  case FAIL_PROJECTS:
    return { ...state, loadingProject: false, projectsError: action.error }
  case POST_REPORT_REQUEST:
    return { ...state, loadingProject: true }
  case POST_REPORT:
    return { ...state, loadingProject: false }
  case FAIL_REPORT_POST:
    return { ...state, loadingProject: false, projectsError: action.error }
  default:
    return state
  }
}

export default reducer