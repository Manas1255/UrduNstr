import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTab';

export type RootStackParams = {
  BottomTabNavigator: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
