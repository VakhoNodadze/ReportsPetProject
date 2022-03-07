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
import {
  FAIL_GATEWAYS_FETCH_ACTION,
  FAIL_PROJECTS_FETCH_ACTION,
  FAIL_REPORT_ACTION,
  FAIL_USERS_FETCH_ACTION,
  FETCH_GATEWAYS_ACTION,
  FETCH_PROJECTS_ACTION,
  FETCH_USERS_ACTION,
  POST_REPORT_ACTION,
  POST_REPORT_REQUEST_ACTION,
  SET_GATEWAYS_ACTION,
  SET_PROJECTS_ACTION,
  SET_USERS_ACTION
} from './types'

export const getUsersRequestAction = (): FETCH_USERS_ACTION => ({
  type: FETCH_USERS_REQUEST
})

export const setUsersAction = (users: any): SET_USERS_ACTION => ({
  type: SET_USERS,
  users
})

export const failgetUsersAction = (error: any): FAIL_USERS_FETCH_ACTION => ({
  type: FAIL_USERS,
  error
})


export const getGatewaysRequestAction = (): FETCH_GATEWAYS_ACTION => ({
  type: FETCH_GATEWAYS_REQUEST
})

export const setGatewaysAction = (gateways: any): SET_GATEWAYS_ACTION => ({
  type: SET_GATEWAYS,
  gateways
})

export const failGetGatewayAction = (error: any): FAIL_GATEWAYS_FETCH_ACTION => ({
  type: FAIL_GATEWAYS,
  error
})


export const getProjectsRequestAction = (): FETCH_PROJECTS_ACTION => ({
  type: FETCH_PROJECTS_REQUEST
})

export const setProjectsAction = (projects: any): SET_PROJECTS_ACTION => ({
  type: SET_PROJECTS,
  projects
})

export const failGetProjectAction = (error: any): FAIL_PROJECTS_FETCH_ACTION => ({
  type: FAIL_PROJECTS,
  error
})


export const postReportRequestAction = (report: any): POST_REPORT_REQUEST_ACTION => ({
  type: POST_REPORT_REQUEST,
  report
})

export const setReportAction = (): POST_REPORT_ACTION => ({
  type: POST_REPORT
})

export const failPostReportAction = (error: any): FAIL_REPORT_ACTION => ({
  type: FAIL_REPORT_POST,
  error
})