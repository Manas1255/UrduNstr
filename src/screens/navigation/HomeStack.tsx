import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import HomeScreen from '../HomeScreen';
import ResultsScreen from '../ResultsScreen';

export type HomeStackParams = {
  HomeScreen: undefined;
  ResultsScreen: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackNavigator: FC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
      <HomeStack.Screen name={'ResultsScreen'} component={ResultsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
