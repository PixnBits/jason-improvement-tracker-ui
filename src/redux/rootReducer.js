import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import tracker from './modules/tracker'

export default combineReducers({
  tracker,
  router
})
