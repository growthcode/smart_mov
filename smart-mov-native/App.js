import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReduceers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '~/redux/reducers'
import AppContainer from '~/containers/AppContainer'
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const loggerMiddlerware = createLogger({ predicate: (getState, action) => __DEV__ });
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddlerware,
    ),
  );
  return createStore(reducers, initialState, enhancer);
}
export const store = configureStore({});

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('~/assets/images/icon.png'),
        require('~/assets/images/splash.png'),
      ]),
      Font.loadAsync({
        ...Ionicons.font, // This is the font that we are using for our tab bar
        ...FontAwesome.font,
        ...MaterialIcons.font,
        'georgia': require('~/assets/fonts/Georgia.ttf'),
        'regular': require('~/assets/fonts/Montserrat-Regular.ttf'),
        'light': require('~/assets/fonts/Montserrat-Light.ttf'),
        'bold': require('~/assets/fonts/Montserrat-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

export default App

