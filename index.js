import {AppRegistry} from 'react-native';
import appNavigator from './src/Navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => appNavigator);
