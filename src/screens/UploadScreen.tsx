import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackArrowIcon} from './assets';
import {UploadStackParams} from './navigation/UploadStack';

type UploadScreenProps = NativeStackScreenProps<
  UploadStackParams,
  'UploadScreen'
>;

const UploadScreen: FC<UploadScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#457B9D',
          alignItems: 'center',

          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 40}}>Results</Text>
      </View>

      <View style={{padding: 24}}>
        <Text style={{fontSize: 24, marginTop: 32}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation henderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;
