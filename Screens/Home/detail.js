import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import CommonHeader from '../../Components/commonHeader';
import PrimaryButton from '../../Components/primaryButton';
import {
  font_black,
  font_secondary,
  primary,
  secondary,
  white,
} from '../../Utils/colors';
import {bold, medium} from '../../Utils/fontFamily';
import {font4, font5, font6, font7, font8} from '../../Utils/fontSize';
import {
  eye,
  heart,
  user,
  calendar,
  dollar_bag,
  location,
} from '../../Utils/images';
import Map from '../../Components/map';
import styles from './css';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const Detail = props => {
  const [fav, setFav] = useState(false);
  const [eyebool, setEyebool] = useState(false);
  return (
    <SafeAreaView style={styles.main}>
      <CommonHeader title={'Uppdrag'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: medium, fontSize: font4}}>
                BYGGA ALTAN
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableHighlight
                underlayColor={secondary}
                onPress={() => setEyebool(!eyebool)}
                style={{padding: 5}}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: eyebool ? font_black : font_secondary,
                  }}
                  source={eye}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={secondary}
                onPress={() => setFav(!fav)}
                style={{
                  padding: 5,
                  marginLeft: 10,
                  tintColor: fav ? font_black : font_secondary,
                }}>
                <Image style={{width: 20, height: 20}} source={heart} />
              </TouchableHighlight>
            </View>
          </View>
          <Text style={{fontFamily: bold, fontSize: font8, color: font_black}}>
            Byggnation av en stor altan 90Kvm, Djurhamn
          </Text>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {}}
              style={styles.detailClipView}>
              <>
                <Image style={{width: 15, height: 15}} source={user} />
                <Text style={styles.detailClip}>Privateperson</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {}}
              style={styles.detailClipView}>
              <>
                <Image style={{width: 15, height: 15}} source={calendar} />
                <Text style={styles.detailClip}>Flexibelt</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {}}
              style={styles.detailClipView}>
              <>
                <Image style={{width: 15, height: 15}} source={location} />
                <Text style={styles.detailClip}>Varmdo kommun, Djurhamn</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {}}
              style={styles.detailClipView}>
              <>
                <Image style={{width: 15, height: 15}} source={dollar_bag} />
                <Text style={styles.detailClip}>39 960 - 59 940 kr</Text>
              </>
            </TouchableHighlight>
          </View>
        </View>
        {/* <Image
          style={{width: '100%', height: 250, backgroundColor: 'red'}}
          source={{
            uri: 'https://media.istockphoto.com/photos/male-architect-hands-making-model-house-picture-id823322674?k=20&m=823322674&s=612x612&w=0&h=mt7tQAJquJvJzon4V1OQ5E6ReqbJ2nc1zfsxZgvlyfA=',
          }}
        /> */}
        <View style={{marginTop: '10%', height: 200}}>
          <Map />
        </View>

        <View style={{padding: 10,marginBottom:'15%'}}>
          <Text
            style={{
              marginTop: 10,
              fontFamily: medium,
              fontSize: font5,
              letterSpacing: 1,
            }}>
            BYGGA ALTAN
          </Text>
          <Text
            style={{fontFamily: medium, fontSize: font4, color: font_black}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <View style={{marginTop: 20}}>
            <Text
              style={{fontFamily: medium, fontSize: font4, letterSpacing: 1}}>
              HUR STOR YTA OMFATTAR BYGGET
            </Text>
            <Text
              style={{fontFamily: medium, fontSize: font4, color: font_black}}>
              90 m
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{fontFamily: medium, fontSize: font4, letterSpacing: 1}}>
              HUR STOR YTA OMFATTAR BYGGET
            </Text>
            <Text
              style={{fontFamily: medium, fontSize: font4, color: font_black}}>
              90 m
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{fontFamily: medium, fontSize: font4, letterSpacing: 1}}>
              HUR STOR YTA OMFATTAR BYGGET
            </Text>
            <Text
              style={{fontFamily: medium, fontSize: font4, color: font_black}}>
              90 m
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{fontFamily: medium, fontSize: font4, letterSpacing: 1}}>
              HUR STOR YTA OMFATTAR BYGGET
            </Text>
            <Text
              style={{fontFamily: medium, fontSize: font4, color: font_black}}>
              90 m
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{alignItems: 'center', marginBottom: 5}}>
        <View style={{width: '60%', position: 'absolute', bottom: 1}}>
          <PrimaryButton
            label={'Rensa'}
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
    </SafeAreaView>
  );
};

export default Detail;
