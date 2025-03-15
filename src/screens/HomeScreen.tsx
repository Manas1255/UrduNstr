import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParams} from './navigation/HomeStack';
import { FC } from 'react';

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'HomeScreen'>;

const HomeScreen: FC<HomeScreenProps> = () =>{
    return ()
}

export default HomeScreen;