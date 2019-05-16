import * as types from '~/redux/actions/types'
import movsReducer from '~/redux/reducers/movs'

const initialState = {
  authToken: '',
  error: '',
  isAuthed: false,
  isFetching: false,
  authTokenExpiresAt: '',
  user_id: '',
  email: '',
  movs: {
    isFetching: false,
    error: '',
    activities: [],
  },
}

export default function currentUser (state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_AUTH :
      return {
        ...state,
        isFetching: true,
      }
    case types.FETCHING_CURRENT_USER_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
      }
    case types.FETCHING_CURRENT_USER_FAILURE :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case types.SET_AUTH :
      return {
        ...state,
        authToken: action.authToken,
        isAuthed: true,
        isFetching: false,
        authTokenExpiresAt: action.authTokenExpiresAt,
        email: action.email,
        user_id: action.user_id,
      }
    case types.REMOVE_AUTH :
      return {
        isAuthed: false,
        authToken: '',
        isFetching: false,
        authTokenExpiresAt: '',
        movs: {
          isFetching: false,
          error: '',
          activities: [],
        },
      }
    case types.FETCHING_MOVS :
    case types.FETCHING_MOVS_SUCCESS :
    case types.FETCHING_MOVS_FAILURE :
    case types.SET_MOVS :
      return {...state, movs: movsReducer(state.movs, action)}
    default :
      return state
  }
}
