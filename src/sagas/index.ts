import { put, call, takeLatest, all } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { getGateways, getUsers, getProjects, postReport } from 'services'
import { setGatewaysAction, failGetGatewayAction, 
  setUsersAction, failgetUsersAction, 
  setReportAction, failGetProjectAction,
  setProjectsAction, failPostReportAction } 
  from 'store/actions'
import { POST_REPORT_REQUEST } from 'store/actionTypes'

export function* handleFetchGateways() {
  try {
    const data: AxiosResponse = yield call(getGateways)
    yield put(setGatewaysAction(data.data))
  }
  catch(error){
    yield put(failGetGatewayAction(error))
  }
}
export function* handleFetchUsers() {
  try {
    const data: AxiosResponse = yield call(getUsers)
    yield put(setUsersAction(data.data))
  }
  catch(error){
    yield put(failgetUsersAction(error))
  }
}
export function* handleFetchProjects() {
  try {
    const data: AxiosResponse = yield call(getProjects)
    yield put(setProjectsAction(data.data))
  }
  catch(error){
    yield put(failGetProjectAction(error))
  }
}
export function* handlePostReport() {
  try {
    yield call(postReport)
    yield put(setReportAction())
  }
  catch(error){
    yield put(failPostReportAction(error))
  }
}

function* watcherSaga() {
  yield call(handleFetchGateways)
  yield call(handleFetchUsers)
  yield call(handleFetchProjects)
  yield takeLatest(POST_REPORT_REQUEST, handlePostReport)
}

const sagas = [watcherSaga()]
export default function* rootSaga() {
  yield all([...sagas])
}