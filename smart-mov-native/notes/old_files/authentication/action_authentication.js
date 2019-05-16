import * as types from '~/redux/actions/types'
import Api from '~/services/api'

export function fetchAuthToken (email = 'admin@gmail.com', password = 'password') {
  return (dispatch, state) => {
    const params = [
      `email=${email}`,
      `password=${password}`,
    ].join('&')
    return Api.post(`/auth_user?${params}`).then(resp => {
      if (resp.errors) {
        console.log(resp)
        console.warn(resp)
      } else {
        console.log('Success Fetch Auth', resp)
        dispatch(setAuthToken(resp))
      }
    }).catch((ex) => {
      console.warn(ex)
    })
  }
}

export function removeAuthToken ({ authToken, user }) {
  return {
    type: types.REMOVE_AUTH_TOKEN,
    authToken,
    user,
  }
}

export function setAuthToken ({ authToken, user }) {
  return {
    type: types.SET_AUTH_TOKEN,
    authToken,
    user,
  }
}

export function fetchTestRoute (email = 'admin@gmail.com', password = 'password') {
  return (dispatch, state) => {
    return Api.get(`/test`, { AUTHORIZATION: `Bearer ${state().authToken}` }).then(resp => {
      if (resp.errors) {
        console.log(resp)
        console.warn(resp)
      } else {
        console.log('Success Fetch Auth', resp)
      }
    }).catch((ex) => {
      console.warn(ex)
    })
  }
}
