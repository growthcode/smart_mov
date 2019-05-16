import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import NavBarItem from '~/components/navBarItem'

import RecordMovScreen from '~/navigation/drawerStack/drawer/screens/RecordMovScreen'
import HistoryScreen from '~/navigation/drawerStack/drawer/screens/HistoryScreen'
import SummaryScreen from '~/navigation/drawerStack/drawer/screens/SummaryScreen'
import AccountScreen from '~/navigation/drawerStack/drawer/screens/AccountScreen'
import SignOutScreen from '~/navigation/drawerStack/drawer/screens/SignOutScreen'

const Drawer = DrawerNavigator({
  HistoryScreen: { screen: HistoryScreen },
  RecordMovScreen: { screen: RecordMovScreen },
  SummaryScreen: { screen: SummaryScreen },
  AccountScreen: { screen: AccountScreen },
  SignOutScreen: { screen: SignOutScreen },
}, {
  navigationOptions: ({ navigation }) => {
    const { state, navigate } = navigation
    const primaryColor = '#3498db'
    const secondaryColor = 'white'
    return ({
      title: state.routeName,
      headerStyle: {
        backgroundColor: primaryColor,
      },
      headerTitleStyle: {
        color: secondaryColor,
      },
      headerTintColor: {
        tintColor: secondaryColor,
      },
      headerLeft: (
        <NavBarItem
          iconName='bars'
          onPress={ () => { navigate('DrawerToggle') } }/>
      ),
    })
  },
})

export default Drawer



