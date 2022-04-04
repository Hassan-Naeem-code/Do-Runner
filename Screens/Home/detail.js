import React, {useState, useEffect} from 'react';
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
import {useSelector} from 'react-redux';
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
import {postDet} from '../../services/api';
import {getApi} from '../../services/apiFunction';

const Detail = ({navigation, route}) => {
  const {id} = route.params;
  const [fav, setFav] = useState(false);
  const [eyebool, setEyebool] = useState(false);
  const [postDetail, setPostDetail] = useState({});
  const loginSession = useSelector(state => state.authReducers.user);
  const getPostDetail = async id => {
    console.log(
      'postDetail + id, loginSession?.token',
      postDetail + id,
      loginSession?.token,
    );
    const result = await getApi(postDet + id, loginSession?.token);
    console.log('result', result?.data);
    if (result && result?.data) {
      setPostDetail(result?.data);
    }
  };
  useEffect(() => {
    getPostDetail(id);
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <CommonHeader title={'Uppdrag'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: medium, fontSize: font4}}>
                {postDetail?.name}
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
            {postDetail?.company?.description}
          </Text>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {}}
              style={styles.detailClipView}>
              <>
                <Image style={{width: 15, height: 15}} source={user} />
                <Text style={styles.detailClip}>{postDetail?.name}</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {}}
              style={styles.detailClipView}>
              <>
                <Image style={{width: 15, height: 15}} source={calendar} />
                <Text style={styles.detailClip}>
                  {postDetail &&
                    postDetail?.for_how_long &&
                    postDetail?.for_how_long.substr(0, 10)}
                </Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {}}
              style={styles.detailClipView}>
              <>
                <Image style={{width: 15, height: 15}} source={location} />
                <Text style={styles.detailClip}>{postDetail?.location}</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {}}
              style={styles.detailClipView}>
              <>
                <Image style={{width: 15, height: 15}} source={dollar_bag} />
                <Text style={styles.detailClip}>
                  {postDetail?.latitude} - {postDetail?.longitude} kr
                </Text>
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

        <View style={{padding: 10, marginBottom: '15%'}}>
          <Text
            style={{
              marginTop: 10,
              fontFamily: medium,
              fontSize: font5,
              letterSpacing: 1,
            }}>
            {postDetail?.company?.name}
          </Text>
          <Text
            style={{fontFamily: medium, fontSize: font4, color: font_black}}>
            {postDetail?.company?.description}
          </Text>

          {/* <View style={{marginTop: 20}}>
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
          </View> */}
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
