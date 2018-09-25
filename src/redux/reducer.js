import { combineReducers } from 'redux'
import metrics from './reducers/metrics'
import authUser from './reducers/authUser'
import common from './reducers/common'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  metrics,
  authUser,
  common,
  router: routerReducer
})