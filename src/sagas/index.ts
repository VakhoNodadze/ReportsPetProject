import { put, call, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { getGateways, getProjects, getUsers, postReport } from 'services'

export function* handleFetchGateways() {
  try {
    const data: AxiosResponse = yield call(getGateways)
    yield put(setSeasonsAction(data.data))
  }
  catch(error){
    yield put(setSeasonsFailAction(error))
  }
}

export function* handleFetchBusinessTypes() {
  try {
    const data: AxiosResponse<SEASONTYPE[]> = yield call(getBusinessTypesService)
    yield put(setBusinessTypesAction(data.data))
  }
  catch(error){
    yield put(failBusinessTypesAction(error))
  }
}
export function* handleFetchBusinessCategories() {
  try {
    const data: AxiosResponse<SEASONTYPE[]> = yield call(getBusinessCategoriesService)
    yield put(setBusinessCategoriesAction(data.data))
  }
  catch(error){
    yield put(failBusinessCategoriesAction(error))
  }
}
function* watcherSaga() {
  yield takeLatest(GET_SEASONS, handleFetchSeasons)
  yield takeLatest(GET_BUSINESS_TYPES_REQUEST, handleFetchBusinessTypes)
  yield takeLatest(GET_BUSINESS_CATEGORIES_REQUEST, handleFetchBusinessCategories)
}

const dictioneriesSaga = [watcherSaga()]
export default dictioneriesSaga
export {}