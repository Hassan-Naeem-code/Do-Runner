import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {buger_menu, searchIcon, back_arrow} from '../Utils/images';

import {font_black, white} from '../Utils/colors';
import {font4, font5, font6, font7, font8} from '../Utils/fontSize';
import {bold, semibold} from '../Utils/fontFamily';

function CommonHeader(props) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.main,
        {backgroundColor: props?.bgColor ? props.bgColor : white},
      ]}>
       {props?.back == true ?<View style={styles.leftMain}>
       <TouchableHighlight
          underlayColor={'transparent'}
          style={styles.lefticon}
          onPress={e => navigation.goBack()}>
          <Image style={{width: 20, height: 20}} source={back_arrow} />
        </TouchableHighlight>
      </View>:null}

      <View style={[styles.rightMain,{flex: props?.back == false ? 1 : 0.85}]}>
        <Text style={styles.centerTxt}>{props?.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 60,
    flexDirection: 'row',
    elevation: 3,
    shadowOpacity: 0.05,
    // justifyContent: 'space-between',
    // elevation: 1,
  },
  leftMain: {
    flexDirection: 'row',
    paddingLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 0.15,
  },
  lefticon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightMain: {
    flexDirection: 'row',
    // paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 0.85,
    flex: 0.85,
  },

  centerTxt: {fontSize: font8, fontFamily: bold, color: font_black},
});

export default CommonHeader;