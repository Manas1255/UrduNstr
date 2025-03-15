import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import HomeScreen from '../HomeScreen';
import UploadScreen from '../UploadScreen';

export type UploadStackParams = {
  UploadScreen: undefined;
  HomeScreen: undefined;
};

const UploadStack = createNativeStackNavigator<UploadStackParams>();

const UploadStackNavigator: FC = () => {
  return (
    <UploadStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <UploadStack.Screen name={'UploadScreen'} component={UploadScreen} />
      <UploadStack.Screen name={'HomeScreen'} component={HomeScreen} />
    </UploadStack.Navigator>
  );
};

export default UploadStackNavigator;
