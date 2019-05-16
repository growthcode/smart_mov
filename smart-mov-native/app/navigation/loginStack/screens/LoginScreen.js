import React, { Component } from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

import { store } from '~/../App'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Text,
  Input,
  Button,
} from 'react-native-elements'
import { Font } from 'expo';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      email: 'admin@gmail.com',
      email_valid: true,
      password: 'password',
      login_failed: false,
      showLoading: false,
    };
  }

  fetchMovsPressed() {
    const that = this
    const props = this.props
    this.props.fetchMovs({
      email: this.state.email,
      password: this.state.password,
    }).then(()=>{
      if (store.getState().currentUser.authToken.length !== 0) {
        that.props.navigation.navigate('drawerStack')
      }
    })
  }


  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading
    });
  }

  render () {
    const { email, password, email_valid, showLoading } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.loginView}>

          {
            this.props.currentUser.isFetching ? (
              <Text style={styles.header}>Signing In...</Text>
            ) : null
          }
          <FormInput
            placeholderTextColor="white"
            placeholder="Email"
            inputStyle={styles.formInput}
            onChangeText={ email => this.setState({email}) }
            containerStyle={{marginVertical: 10}}
            value={email}
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            // ref={ input => this.emailInput = input }
            // onSubmitEditing={() => {
            //   this.setState({email_valid: this.validateEmail(email)});
            //   this.passwordInput.focus();
            // }}
            // errorStyle={{textAlign: 'center', fontSize: 12}}
            // errorMessage={email_valid ? null : "Please enter a valid email address"}
          />
          <FormInput
            placeholderTextColor="white"
            placeholder="Password"
            inputStyle={styles.formInput}
            onChangeText={ password => this.setState({password}) }
            containerStyle={{marginVertical: 10}}
            secureTextEntry={true}
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            // ref={ input => this.passwordInput = input}
          />
          <Button
            title='LOG IN'
            activeOpacity={1}
            underlayColor="transparent"
            onPress={() => {
              this.fetchMovsPressed()
              // this.props.navigation.navigate('drawerStack')
            }}
            loading={showLoading}
            // disabled={ !email_valid && password.length < 8}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    backgroundColor: "#000",

  },
  header: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'bold',
    textAlign: 'center',
  },
  formInput: {
    color: 'white',
    marginLeft: 10,
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
