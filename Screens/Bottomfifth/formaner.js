import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import CommonHeader from '../../Components/commonHeader';
import {font_black, primary, secondary, white} from '../../Utils/colors';
import {medium, bold, regular} from '../../Utils/fontFamily';
import {font4, font5, font6} from '../../Utils/fontSize';
import styles from './css';
import {formaner, formaner1, tick, facebook} from '../../Utils/images';
import PrimaryButton from '../../Components/primaryButton';
let arr=[{
    id:1
},{
    id:1
},
{
    id:1
},{
    id:1
}]
const Formaner = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={'Formaner'} />
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
            marginHorizontal: 80,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Text
            style={{fontFamily: medium, fontSize: font6, color: font_black}}>
            5
          </Text>
          <Text style={[styles.hanteraDesc, {textAlign: 'center'}]}>
            samarbetspartners med fordelaktiga erbjudanden
          </Text>
        </View>

        {arr.length && arr.map((data,ind)=>
            <View key={ind} style={{marginBottom:30}}>
          <Image
            style={{width: '100%', height: 150}}
            source={formaner}
            resizeMode={'cover'}
          />

          <View style={{backgroundColor: white, padding: 20}}>
            <View style={styles.formanerBannerCircle}>
              <Image source={formaner1} style={styles.circleImg} />
            </View>
            <Text style={styles.formanerTitle}>
              Utvalt for medvetna hantverkare & hemmalfixare
            </Text>

            <View style={{marginVertical: 20}}>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.tickCircle}>
                  <Image style={{width: 14, height: 14}} source={tick} />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.hanteraDesc}>Telefonradgivning</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.tickCircle}>
                  <Image style={{width: 14, height: 14}} source={tick} />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.hanteraDesc}>Telefonradgivning</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.tickCircle}>
                  <Image style={{width: 14, height: 14}} source={tick} />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.hanteraDesc}>Telefonradgivning</Text>
                </View>
              </View>
            </View>
            <Text style={styles.hanteraDesc}>
              Har hittar du erbjudanen fran vara samarbetspartners. Teckna ett
              formanligt foreragslan, tanka till rabatterat pris eller fahjalp
              med det administrative.
            </Text>
            <View style={{marginVertical: 20}}>
              <PrimaryButton
                label={'Ta delav erbjudandet'}
                height={50}
                lblSize={font4}
                onClick={() => {}}
                borderRadius={30}
                backgroundColor={primary}
                fill={font_black}
                txtFamily={bold}
              />
            </View>
          </View>
        </View>)}
     
      </ScrollView>
    </SafeAreaView>
  );
};

export default Formaner;
