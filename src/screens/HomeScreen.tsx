import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackParams} from './navigation/HomeStack';

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'HomeScreen'>;

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#457B9D',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 24}}>اردوNSTR</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
