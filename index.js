/**
 * @format
 */

import { AppRegistry } from 'react-native'

import { App } from './App'
import { name as appName } from './app.json'

// https://docs.swmansion.com/react-native-gesture-handler/docs/#ios
import 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => App)
