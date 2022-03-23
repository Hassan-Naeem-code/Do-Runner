import React from 'react';
import {I18nManager, Text, TouchableHighlight} from 'react-native';
import {brown, white, blue, gray, primary} from '../Utils/colors';

const PrimaryButton = ({
  appearance,
  fill,
  label,
  size,
  onClick,
  lblSize,
  cart,
  id,
  txtFamily,
  height,
  backgroundColor,
  disabled,
  borderRadius,
  brw,
  brColor
}) => {
  return (
    <TouchableHighlight
      underlayColor="transparant"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : null,
        borderRadius: borderRadius ? borderRadius : null,
        borderColor: brColor ? brColor:  white,
        borderWidth: brw ? brw : 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        elevation: 1,
      }}
      onPress={e => (onClick ? onClick(e) : null)}
      disabled={disabled ? disabled : false}>
      <Text
        style={{
          ...{color: fill ? fill : '#fff'},
          ...{fontSize: lblSize ? lblSize : {}},
          ...{fontFamily: txtFamily ? txtFamily : null},
          writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        }}>
        {label}
      </Text>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
