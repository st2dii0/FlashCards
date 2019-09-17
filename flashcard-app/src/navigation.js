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
            title: 'Question ?',
            headerLeft: null,
            headerStyle:{
                backgroundColor: '#df4646',
                borderBottomWidth: 0
            }
        }
    },
  }, {
      initialRouteName: 'Main',
    }
    );
  
  const AppContainer = createAppContainer(HomeStack);
  
  export default AppContainer;