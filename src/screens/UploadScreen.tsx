import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackArrowIcon} from './assets';
import {UploadStackParams} from './navigation/UploadStack';

type UploadScreenProps = NativeStackScreenProps<
  UploadStackParams,
  'UploadScreen'
>;

const UploadScreen: FC<UploadScreenProps> = ({navigation}) => {
  const [imageUri, setImageUri] = useState<string | undefined>('');

  const galleryOptions: ImageLibraryOptions = {
    mediaType: 'photo',
    includeBase64: true,
    maxHeight: 400,
    maxWidth: 400,
  };

  const cameraOptions: CameraOptions = {
    mediaType: 'photo',
    saveToPhotos: true,
    includeBase64: true,
    maxHeight: 400,
    maxWidth: 400,
  };

  const onUploadPress = () => {
    try {
      launchImageLibrary(galleryOptions, response => {
        if (response.assets) {
          setImageUri(response.assets[0].uri);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onCameraPress = () => {
    try {
      launchCamera(cameraOptions, response => {
        if (response.assets) {
          setImageUri(response.assets[0].uri);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

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
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{marginRight: 100}}>
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 40}}>اردوNSTR</Text>
      </View>

      <Text style={{fontSize: 24, marginTop: 32, textAlign: 'center'}}>
        Please click or upload Image:
      </Text>

      <TouchableOpacity
        style={{
          width: '80%',
          backgroundColor: '#1D3557',
          height: 64,
          marginTop: 32,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onCameraPress}>
        <Text style={{color: 'white', fontSize: 32}}>Open Camera</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 32, textAlign: 'center', marginTop: 32}}>OR</Text>

      <TouchableOpacity
        style={{
          width: '80%',
          height: 64,
          marginTop: 32,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}
        onPress={onUploadPress}>
        <Text style={{fontSize: 32}}>Upload Image</Text>
      </TouchableOpacity>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 32}}>
        {imageUri ? (
          <Image
            source={{uri: imageUri}}
            style={{
              width: 100,
              height: 100,
              marginBottom: 4,
            }}
          />
        ) : null}
      </View>

      <TouchableOpacity
        style={{
          width: '80%',
          height: 64,
          marginTop: 32,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate('ResultsScreen');
        }}>
        <Text style={{fontSize: 32}}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UploadScreen;
