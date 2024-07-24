import { registerRootComponent } from 'expo';

import App from './App';
import Sample from './Sample/Sample';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const isLoggedIn = true;

registerRootComponent(isLoggedIn ? Sample : App);
