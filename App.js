import Registro from './components/Registro';
import Home from './components/Home';
import Login from './components/Login';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '',
      headerShown: false,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: '',
      headerTransparent: true
    }
  },
  Registro: {
    screen: Registro,
    navigationOptions: {
      title: '',
      headerTransparent: true
    }
  }
})

const App = createAppContainer(RootStack);

export default App;
