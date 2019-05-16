// this is where we TRANSFORM the state of AUTH
// each function name is a key in the state object

import createReducer from '~/services/createReducer'
import * as types from '~/redux/actions/types'

export const authToken = createReducer({}, {
  [types.SET_AUTH] (state, action) {
    return action.authToken
  },
  [types.REMOVE_AUTH_TOKEN] (state, action) {
    return null
  },
})

export const email = createReducer({}, {
  [types.SET_AUTH_TOKEN] (state, action) {
    return action.user.email
  },
})

export const user_id = createReducer({}, {
  [types.SET_AUTH_TOKEN] (state, action) {
    return action.user.id
  },
})
