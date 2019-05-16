// initialState schema
// Note that each reducers should managing its own part of the global state.
// The `state` parameter is different for every reducer, and corresponds to the part of the state it manages.


{
  // currentUser
  authToken: '',
  error: '',
  isAuthed: false,
  isFetching: false,
  authTokenExpiresAt: '',

  // currentUser
  current_user: {
    user_id: '',
    email: '',
    first: '',
    last: '',
  },
}
