/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
    'currentlyFocusedField is deprecated and will be removed in a future release.'
]);

AppRegistry.registerComponent(appName, () => App);
