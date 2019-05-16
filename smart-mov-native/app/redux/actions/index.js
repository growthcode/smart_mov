import * as MovActions from '~/redux/actions/movs'
// import * as AuthActions from '~/redux/actions/authentication'
import * as CurrentUser from '~/redux/actions/currentUser'

export const ActionCreators = Object.assign({},
  MovActions,
  // AuthActions,
  CurrentUser,
)
