import React from 'react';
import Main from './screens/Main';
import Game from './screens/Game';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';




const HomeStack = createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: `FlashCards`,
        header: null
      }
    },
    Game: {
        screen: Game,
        navigationOptions:  {
            title: 'Game',
            //headerLeft: null
        }
    },
  }, {
      initialRouteName: 'Main',
    }
    );


  
  const AppContainer = createAppContainer(HomeStack);
  
  export default AppContainer;