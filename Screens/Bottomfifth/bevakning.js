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
import {
  font_black,
  font_secondary,
  primary,
  secondary,
  secondary_light,
  white,
} from '../../Utils/colors';
import {medium, bold, regular} from '../../Utils/fontFamily';
import {font4, font5, font6} from '../../Utils/fontSize';
import styles from './css';
import {formaner, formaner1, tick, info} from '../../Utils/images';
import PrimaryButton from '../../Components/primaryButton';
let arr = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
];
const Bevakning = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={'Bevakning'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          backgroundColor: secondary,
          //   flex: 1,
        }}>
        <Text style={styles.hanteraDesc}>
          Har hittar du erbjudanen fran vara samarbetspartners. Teckna ett
          formanligt foreragslan, tanka till rabatterat pris eller fahjalp med
          det administrative.
        </Text>

        <View
          style={{
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{width: 20, height: 20}} source={info} />
            <Text
              style={{
                fontFamily: medium,
                fontSize: font5,
                color: font_black,
                marginLeft: 10,
              }}>
              TIPS
            </Text>
          </View>

          <Text
            style={[
              styles.hanteraDesc,
              {
                textAlign: 'left',
                width: '80%',
                marginTop: 5,
                color: font_black,
              },
            ]}>
            For att kunna ta emot aviseringar i DorunnerPro-appen sa maste minst
            en bevakningsprofil vara satt till aktiv
          </Text>
        </View>

        {arr.length &&
          arr.map((data, ind) => (
            <View key={ind} style={{marginBottom: 30}}>
              <View style={{backgroundColor: white, padding: 20}}>
                <Text style={styles.bevakningTitle}>
                  Mina branscher & omraden kopia
                </Text>
                <Text style={styles.bevakningDesc}>
                  Bevakar 38 kategorier och 26 omraden
                </Text>

                <View style={{marginTop: 10}}>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={styles.offertaltickCircle}>
                      <Image style={{width: 8, height: 8}} source={tick} />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                      <Text style={styles.bevakningDesc}>Aktiv</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={styles.offertaltickCircle}>
                      <Image style={{width: 8, height: 8}} source={tick} />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                      <Text style={styles.bevakningDesc}>
                        Standarddevakning
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={styles.offertaltickCircle}>
                      <Image style={{width: 8, height: 8}} source={tick} />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                      <Text style={styles.bevakningDesc}>SMS</Text>
                    </View>
                  </View>
                  <View style={[styles.line, {marginVertical: 15}]} />
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <TouchableHighlight
                    onPress={() => props?.navigation.navigate('BevakningDetail',{from:'Redigera'})}
                    underlayColor={secondary_light}
                    style={{margin: 5, borderBottomWidth: 1, padding: 5}}>
                    <Text style={styles.hanteraDesc}>Redigera</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                     onPress={() => props?.navigation.navigate('BevakningDetail',{from:'Kopiera'})}
                     underlayColor={secondary_light}
                    style={{margin: 5, borderBottomWidth: 1, padding: 5}}>
                    <Text style={styles.hanteraDesc}>Kopiera</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {}}
                    underlayColor={secondary_light}
                    style={{margin: 5, borderBottomWidth: 1, padding: 5}}>
                    <Text style={styles.hanteraDesc}>Ange som standard</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {}}
                    underlayColor={secondary_light}
                    style={{margin: 5, borderBottomWidth: 1, padding: 5}}>
                    <Text style={styles.hanteraDesc}>Ta bort</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
      <View style={{alignItems: 'center', marginBottom: 5}}>
        <View style={{width: '60%', position: 'absolute', bottom: 1}}>
          <PrimaryButton
            label={'Skapa ny bevakning'}
            height={50}
            lblSize={font4}
            onClick={() => props?.navigation.navigate('BevakningDetail',{from:'Btn'})}
            borderRadius={30}
            backgroundColor={primary}
            fill={font_black}
            txtFamily={medium}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bevakning;
