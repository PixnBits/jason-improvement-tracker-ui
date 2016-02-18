/* @flow */
import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_DAILY_GOALS = 'LOAD_DAILY_GOALS'
export const RECEIVE_DAILY_GOALS = 'RECEIVE_DAILY_GOALS'

// ------------------------------------
// Actions
// ------------------------------------
export const loadDailyGoals = () => ({
  type: LOAD_DAILY_GOALS
})

export const receiveDailyGoals = (goals) => ({
  type: RECEIVE_DAILY_GOALS,
  goals,
  receivedAt: Date.now()
})

export const fetchData = () => {
  const source = 'http://jason-tracker.herokuapp.com'
  const path = '/trackers/all'
  return dispatch => {
    dispatch(loadDailyGoals())
    return fetch(source + path)
      .then(req => req.json())
      .then(json => dispatch(receiveData(json)))
  }
}

export const actions = {
  fetchData,
  receiveData
}

// This is used to map the JSON response into goals
function receiveData (goalsJson) {
  const trackerData = [
    {
      id: 'gym',
      icon: 'arrows-h',
      label: 'Checkins This Month',
      onClick: () => {},
      result: goalsJson.gym.totals.month
    },
    {
      id: 'food',
      icon: 'cutlery',
      label: 'Net Calories',
      onClick: () => {},
      result: goalsJson.calories.netCalories
    },
    {
      id: 'language',
      icon: 'comments',
      label: 'Spanish Lesson Streak',
      onClick: () => {},
      result: goalsJson.language.streak
    },
    {
      id: 'money',
      icon: 'money',
      label: 'Daily Spending',
      onClick: () => {},
      result: '$' + parseFloat(goalsJson.money.recent.total).toFixed(2)
    }
  ]
  return receiveDailyGoals(trackerData)
}

function setGoals (state = [], action) {
  console.log('in setGoals')
  if (action.goals) {
    return action.goals
  } else {
    return state
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // [LOAD_DAILY_GOALS]: setLoader,
  [RECEIVE_DAILY_GOALS]: setGoals
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function dailyGoalReducer (state: goals = initialState, action: Action): Object {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
