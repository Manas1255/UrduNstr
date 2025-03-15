// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {FC} from 'react';
// import {Text, TouchableOpacity, View} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {BackArrowIcon} from './assets';
// import {HomeStackParams} from './navigation/HomeStack';

// type ResultsScreenProps = NativeStackScreenProps<
//   HomeStackParams,
//   'ResultsScreen'
// >;

// const ResultsScreen: FC<ResultsScreenProps> = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View
//         style={{
//           width: '100%',
//           height: 100,
//           backgroundColor: '#457B9D',
//           alignItems: 'center',

//           flexDirection: 'row',
//         }}>
//         <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
//           <BackArrowIcon />
//         </TouchableOpacity>
//         <Text style={{color: 'white', fontSize: 40}}>اردوNSTR</Text>
//       </View>

//       <Text style={{fontSize: 24, textAlign: 'center', marginTop: 32}}>
//         Please click or upload Image:
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default ResultsScreen;
