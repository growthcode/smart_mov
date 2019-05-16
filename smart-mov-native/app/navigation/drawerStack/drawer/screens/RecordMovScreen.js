import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// import ActivitiesContainer from '~/containers/activities'
// import PollsContainer from '~/containers/polls'

class RecordMov extends Component {
  static navigationOptions = {
    title: 'Record Mov',
  };
  render () {
    console.log("RecordMov", this.props)
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>
          {`Testicles. Woops I mean Testies. ${this.props.email}`}
        </Text>
        <Text>
          Say Whaaaaaaaaaaaaaaa!
        </Text>
        <View>
          {
            //THIS IS FOR TESTING "AUTHTOKEN"
          }

        </View>
      </View>
    )
  }
}

function mapStateToProps ({ authToken, email }) {
  return {
    authToken,
    email,
  }
}

export default connect(mapStateToProps)(RecordMov)
