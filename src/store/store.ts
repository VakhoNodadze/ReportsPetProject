import { createStore, applyMiddleware, combineReducers } from 'redux'
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './index'
import rootSaga from '../sagas'


const rootReducer = combineReducers(reducers)

export type AppState = ReturnType<typeof rootReducer>
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector
// Mount it on the Store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// Run the saga
sagaMiddleware.run(rootSaga)

export default store