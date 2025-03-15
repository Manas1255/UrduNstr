// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// export type BottomTabParams = {
//   HomeStack: undefined;
// };

// const BottomTab = createBottomTabNavigator<BottomTabParams>();

// const BottomTabNavigator: FC = () => {
//   return (
//     <BottomTab.Navigator
//       initialRouteName={StackNames.ProfileStack}
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {...styles.tabBar},
//         tabBarShowLabel: false,
//       }}>
//       <BottomTab.Screen
//         name={StackNames.MapStack}
//         component={MapStackNavigator}
//         options={{
//           tabBarIcon: ({size, focused}) =>
//             focused ? (
//               <SearchIcon width={size} height={size} />
//             ) : (
//               <SearchIcon width={size} height={size} fill={color.black} />
//             ),
//         }}
//       />
//       <BottomTab.Screen
//         name={StackNames.CheckinStack}
//         component={CheckinStackNavigator}
//         options={{
//           tabBarIcon: ({size, focused}) =>
//             focused ? (
//               <CheckinIcon width={size} height={size} />
//             ) : (
//               <CheckinIcon width={size} height={size} fill={color.black} />
//             ),
//         }}
//       />
//       {role === AccountType.gym_owner && (
//         <BottomTab.Screen
//           name={StackNames.GymStack}
//           component={GymStackNavigator}
//           options={{
//             tabBarIcon: ({size, focused}) =>
//               focused ? (
//                 <LeaderBoardIcon width={size} height={size} />
//               ) : (
//                 <LeaderBoardIcon
//                   width={size}
//                   height={size}
//                   fill={color.black}
//                 />
//               ),
//           }}
//         />
//       )}
//       <BottomTab.Screen
//         name={StackNames.ProfileStack}
//         component={ProfileStackNavigator}
//         options={({route}) => ({
//           tabBarStyle: getTabBarStyle(route),
//           tabBarIcon: ({size, focused}) =>
//             focused ? (
//               <ProfileIcon width={size} height={size} />
//             ) : (
//               <ProfileIcon width={size} height={size} fill={color.black} />
//             ),
//         })}
//       />
//     </BottomTab.Navigator>
//   );
// };
