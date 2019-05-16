import colors from '~/config/colors';
import React, { PropTypes, Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Icon,
  ListItem,
  Avatar,
} from 'react-native-elements';

class activity extends Component {
  constructor(props) {
    super(props);
    const activityId = this.props.navigation.getParam('id')
    this.state = this.props.currentUser.movs.activities.find(
      (obj) => { return obj.id === activityId }
    )
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={{ marginTop: 15 }} title={`${this.state.num_movs} movs / $${this.state.avg_value} avg / $${this.state.value_saved} tot`}>
            <Text style={styles.fonts} h4>
              {this.state.title}
            </Text>
          </Card>
          <Card containerStyle={{ marginTop: 15, marginBottom: 15 }} title="Events">
            {this.state.events.map((event, i) => (
              <View key={event.id}>
                <ListItem
                  key={event.id}
                  title={`$${event.value} savings`}
                  subtitle={`${event.happened_at}`}
                  hideChevron={true}
                  bottomDivider
                  textInputMultiline={true}
                  titleNumberOfLines={3}
                  style={styles.list}
                />
              </View>
            ))}
          </Card>
        </View>
      </ScrollView>
    )
  }
}

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/redux/actions'

function mapStateToProps (state) {
  // debugger
  // return {
    // authToken,
  //   email,
  //   getMovs,
  // }
  return state
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(activity)
