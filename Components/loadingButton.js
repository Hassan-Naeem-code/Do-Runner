import React from 'react';
import {I18nManager, Text, View, ActivityIndicator} from 'react-native';
import {white} from '../Utils/colors';

const LoadingButton = ({
  fill,
  height,
  backgroundColor,
  borderRadius,
  brw,
  brColor,
}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor ? backgroundColor : null,
        borderRadius: borderRadius ? borderRadius : null,
        borderColor: brColor ? brColor : white,
        borderWidth: brw ? brw : 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        elevation: 1,
      }}>
      <ActivityIndicator size="large" color={fill} />
    </View>
  );
};

export default LoadingButton;
