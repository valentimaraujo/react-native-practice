import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      },
    },
    Section: {
      screen: SectionScreen,
      navigationOptions: {
        headerShown: false
      },
    }
  },
  {
    mode: "modal"
  });

export default createAppContainer(TabNavigator);
