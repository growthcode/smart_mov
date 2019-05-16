import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class SummaryScreen extends Component {
  static navigationOptions = {
    title: 'Summary',
  };
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>
          Summary
        </Text>
      </View>
    )
  }
}
