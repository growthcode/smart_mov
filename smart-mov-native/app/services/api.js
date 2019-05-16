// This uses 'react-native' "FETCH Api"
// https://facebook.github.io/react-native/docs/network.html

// Axios.js is a popular Async request library
// async/await
// batch requests
// https://github.com/axios/axios

class Api {
  static headers () {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get (route, headers = {}) {
    return this.xhr(route, null, 'GET', headers)
  }

  static put (route, headers = {}, params) {
    return this.xhr(route, params, 'PUT', headers)
  }

  static post (route, headers = {}, params) {
    return this.xhr(route, params, 'POST', headers)
  }

  static delete (route, headers = {}, params) {
    return this.xhr(route, params, 'DELETE', headers)
  }

  static xhr (route, params, verb, headers) {
    // const host = 'http://localhost:3000/api/v1'
    const host = 'https://smartmov.herokuapp.com/api/v1'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null)
    options.headers = Object.assign({}, Api.headers(), headers)
    return fetch(url, options).then(resp => {
      return resp.json()
    })
  }
}
export default Api
