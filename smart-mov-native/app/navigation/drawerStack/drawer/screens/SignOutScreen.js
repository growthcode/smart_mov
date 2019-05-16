import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

class SignOutScreen extends Component {
  static navigationOptions = {
    title: 'Sign Out',
  };

  signOutPressed() {
    this.props.signOut()
    this.props.navigation.navigate('loginStack')
  }

  componentWillMount() {
    this.signOutPressed()
  }

  render () {
    return (
      <View>
        <TouchableHighlight onPress={ () => this.signOutPressed() } >
          <Text>
            Sign Out
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/redux/actions'

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOutScreen)
