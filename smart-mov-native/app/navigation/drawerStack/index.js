import React from 'react'
import { StackNavigator } from 'react-navigation'
import Drawer from '~/navigation/drawerStack/drawer'
import Activity from '~/components/activity/activity'

const DrawerStack = StackNavigator({
  DrawerStack: { screen: Drawer },
  Activity: { screen: Activity },
})

export default DrawerStack
