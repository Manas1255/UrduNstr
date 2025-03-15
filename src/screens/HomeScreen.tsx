import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackParams} from './navigation/HomeStack';

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'HomeScreen'>;

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#457B9D',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 40}}>اردوNSTR</Text>
      </View>

      <Text style={{fontSize: 32, textAlign: 'center', marginTop: 32}}>
        Recent Searches
      </Text>

      {/* add pics */}
      <TouchableOpacity onPress={() => navigation.navigate('ResultsScreen')}>
        <Text>Navigate to results</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
