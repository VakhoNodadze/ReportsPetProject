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
  
export type FETCH_USERS_ACTION = {
    type: typeof FETCH_USERS_REQUEST
}

export type SET_USERS_ACTION = {
    type: typeof SET_USERS
    users: any
}

export type FAIL_USERS_FETCH_ACTION = {
    type: typeof FAIL_USERS
    error: any
}

  
export type FETCH_GATEWAYS_ACTION = {
    type: typeof FETCH_GATEWAYS_REQUEST
}

export type SET_GATEWAYS_ACTION = {
    type: typeof SET_GATEWAYS
    gateways: any
}

export type FAIL_GATEWAYS_FETCH_ACTION = {
    type: typeof FAIL_GATEWAYS
    error: any
}

  
export type FETCH_PROJECTS_ACTION = {
    type: typeof FETCH_PROJECTS_REQUEST
}

export type SET_PROJECTS_ACTION = {
    type: typeof SET_PROJECTS
    projects: any
}

export type FAIL_PROJECTS_FETCH_ACTION = {
    type: typeof FAIL_PROJECTS
    error: any
}

  
export type POST_REPORT_REQUEST_ACTION = {
    type: typeof POST_REPORT_REQUEST
    report: any
}

export type POST_REPORT_ACTION = {
    type: typeof POST_REPORT
}

export type FAIL_REPORT_ACTION = {
    type: typeof FAIL_REPORT_POST
    error: any
}


export type STATE = { users: any, usersError: any, loadingUsers: boolean } & { gateways: any, gatewaysError: any, loadingGateways: boolean} 
& { projects: any, projectsError: any, loadingProject: boolean } & { report: any, reportsError: any, loadingReports: boolean } 


export type ACTION_TYPE = FETCH_USERS_ACTION | SET_USERS_ACTION | FAIL_USERS_FETCH_ACTION 
| FETCH_GATEWAYS_ACTION | SET_GATEWAYS_ACTION | FAIL_GATEWAYS_FETCH_ACTION 
| FETCH_PROJECTS_ACTION | SET_PROJECTS_ACTION | FAIL_PROJECTS_FETCH_ACTION
| POST_REPORT_REQUEST_ACTION | POST_REPORT_ACTION | FAIL_REPORT_ACTION