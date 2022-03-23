import {Api} from '../../APIs/interceptor';
import * as actionTypes from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {refreshTokenApi} from '../../APIs/endPoints';
import {store} from '../store';

const coursesCollection = courseData => {
  return {
    type: 'COURSES_COLLECTION',
    courseData,
  };
};

export {coursesCollection};
