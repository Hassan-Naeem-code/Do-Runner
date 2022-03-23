import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import PrimaryButton from '../../../Components/primaryButton';
import {
  font_black,
  font_secondary,
  primary,
  secondary,
} from '../../../Utils/colors';
import {medium, regular} from '../../../Utils/fontFamily';
import {font4, font5} from '../../../Utils/fontSize';
import {hammer, user, calendar, dollar_bag} from '../../../Utils/images';
import styles from '../css';
import {useNavigation} from '@react-navigation/native';
const card = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.line} />
      <TouchableHighlight
        underlayColor={secondary}
        onPress={() => navigation.navigate('HomeDetail')}
        style={{
          flexDirection: 'row',
          // flex: 1,
          padding: 20,
        }}>
        <>
          <View
            style={{
              backgroundColor: secondary,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <Image style={{width: 25, height: 25}} source={hammer} />
          </View>
          <View style={{paddingHorizontal: 10, flex: 1}}>
            <Text
              style={{fontFamily: regular, fontSize: font5, color: font_black}}>
              Atgarda ett sprucket tak, Arsta
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                style={{width: 14, height: 14, marginRight: 10}}
                source={user}
              />
              <Text style={{fontFamily: regular, fontSize: font4}}>
                Privat person
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                style={{width: 14, height: 14, marginRight: 10}}
                source={calendar}
              />
              <Text style={{fontFamily: regular, fontSize: font4}}>
                Flexibelt
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                style={{width: 14, height: 14, marginRight: 10}}
                source={dollar_bag}
              />
              <Text style={{fontFamily: regular, fontSize: font4}}>
                12 720 - 19 080 kr
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.dotCircle} />
                <View style={styles.dotCircle} />
                <View style={styles.dotCircle} />
                <View style={styles.dotCircle} />
                <View style={styles.dotCircle} />
              </View>
              <View style={{marginHorizontal: 20, flex: 0.7}}>
                <PrimaryButton
                  label={'Kontakta'}
                  height={50}
                  lblSize={font5}
                  onClick={() => {}}
                  borderRadius={30}
                  backgroundColor={primary}
                  fill={font_black}
                  txtFamily={medium}
                />
              </View>
            </View>
          </View>
        </>
      </TouchableHighlight>
    </>
  );
};

export default card;