import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import CommonHeader from '../../Components/commonHeader';
import {font_black, secondary_light, white} from '../../Utils/colors';
import {medium} from '../../Utils/fontFamily';
import {font4, font6} from '../../Utils/fontSize';
import {phone, email} from '../../Utils/images';

import styles from './css';
const Kontakta = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={'Kontakta oss'} />
      <View style={{padding: 0, backgroundColor: white}}>
        <Text
          style={{
            fontFamily: medium,
            fontSize: font6,
            color: font_black,
            textAlign: 'center',
            marginTop: 20,
          }}>
          {' '}
          Kundtjanst
        </Text>
        <TouchableHighlight underlayColor={secondary_light} onPress={() => {}}>
          <View style={[styles.listMain,{padding: 20}]}>
            <View style={{flex: 0.8}}>
              <Text style={[styles.listTxt]}>08-580 800 05</Text>
            </View>
            <View style={styles.listRightView}>
              <Image style={styles.img} source={phone} />
            </View>
          </View>
        </TouchableHighlight>

        <View style={styles.line} />
        <TouchableHighlight underlayColor={secondary_light} onPress={() => {}}>
          <View style={[styles.listMain,{padding: 20,marginBottom:20}]}>
            <View style={{flex: 0.8}}>
              <Text style={[styles.listTxt]}>E-post</Text>
            </View>
            <View style={styles.listRightView}>
              <Image style={styles.img} source={email} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Kontakta;
