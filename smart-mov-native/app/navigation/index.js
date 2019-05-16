import React from 'react'
import { StackNavigator } from 'react-navigation'
// import Login from '~/containers/Login'
import DrawerStack from '~/navigation/drawerStack'
import LoginStack from '~/navigation/loginStack'
// import Home from '~/containers/Home'

// const PrimaryNav = createSwitchNavigator({
//   loginStack: ScreenComponentOne,
//   drawerStack: ScreenComponentTwo,
//   routeNameThree: ScreenComponentThree,
// });

const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerStack },
}, {
  headerMode: 'none',
  // title: 'Main',
  initialRouteName: 'loginStack',
  // initialRouteName: 'drawerStack',
})


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/redux/actions'

// For Actions...
// mapping dispatch into this Container's Props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

// export default PrimaryNav
export default connect(mapDispatchToProps)(PrimaryNav)
