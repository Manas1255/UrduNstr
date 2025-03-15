import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {AddIcon, HomeIcon} from '../assets';
import HomeStackNavigator from './HomeStack';
import UploadStackNavigator from './UploadStack';

export type BottomTabParams = {
  HomeStack: undefined;
  UploadStack: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator
      //   initialRouteName={StackNames.ProfileStack}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {...styles.tabBar},
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name={'HomeStack'}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <HomeIcon width={size} height={size} />
            ) : (
              <HomeIcon width={size} height={size} fill={'black'} />
            ),
        }}
      />

      <BottomTab.Screen
        name={'UploadStack'}
        component={UploadStackNavigator}
        options={{
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <AddIcon width={size} height={size} />
            ) : (
              <AddIcon width={size} height={size} fill={'black'} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    elevation: 16,
    backgroundColor: '#256D9A',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabNavigator;
