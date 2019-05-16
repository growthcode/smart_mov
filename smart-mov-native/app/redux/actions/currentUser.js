import * as types from '~/redux/actions/types'
import Api from '~/services/api'

export function fetchingAuth() {
  return {
    type: types.FETCHING_AUTH,
  }
}
export function fetchingCurrentUserSuccess() {
  return {
    type: types.FETCHING_CURRENT_USER_SUCCESS,
  }
}
export function fetchingCurrentUserFailure(error) {
  console.warn("action: fetchingCurrentUserFailure(error)", error)
  return {
    type: types.FETCHING_CURRENT_USER_FAILURE,
    error,
  }
}
export function setAuth(data) {
  return {
    type: types.SET_AUTH,
    ...data,
  }
}
export function removeAuth() {
  return {
    type: types.REMOVE_AUTH,
  }
}


function fetchAuthFromSmartMov (email, password) {
  const params = [
    `email=${email}`,
    `password=${password}`,
  ].join('&')
  return Api.post(`/auth_user?${params}`)
}

export function fetchAndHandleAuthedUser(options) {
  options = options || {}
  email = options.email || 'admin@gmail.com'
  password = options.password || 'password'
  navigation = options.navigation
  return function(dispatch) {
    dispatch(fetchingAuth())
    return fetchAuthFromSmartMov(email, password).then(resp => {
      if (resp.errors) {
        dispatch(fetchingCurrentUserFailure(resp.errors))
      } else {
        dispatch(fetchingCurrentUserSuccess(resp.errors))
        dispatch(
          setAuth({
            authToken: resp.authToken,
            user_id: resp.user.id,
            email: resp.user.email,
            authTokenExpiresAt: resp.expiresAt,
         })
        )
      }
    }).catch((error) => {
      dispatch(fetchingCurrentUserFailure(error))
    })
  }
}

export function signOut() {
  return function(dispatch) {
    dispatch(removeAuth())
  }
}
