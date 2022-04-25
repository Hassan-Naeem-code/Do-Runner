import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
  Linking,
} from 'react-native';
import CustomHeader from '../../Components/customHeader';
import PrimaryButton from '../../Components/primaryButton';
import {
  font_black,
  font_secondary,
  primary,
  secondary_light,
} from '../../Utils/colors';
import {bold, medium} from '../../Utils/fontFamily';
import {font4, font5, font6, font7, font8} from '../../Utils/fontSize';
import {link_url, arrow_right} from '../../Utils/images';
import {useSelector, useDispatch} from 'react-redux';
import {userLogout} from '../../services/api';
import {postApi} from '../../services/apiFunction';
import {logOutUserFromApp} from '../../Redux/actions/authActions';
import toast from 'react-native-simple-toast';

import styles from './css';
let arr = [
  // {
  //   title: 'Andra profile',
  //   url: true,
  //   link: 'https://company.dorunner.se/profileprofile',
  // },
  {
    title: 'Contact Us',
    url: false,
  },
  {
    title: 'Referals',
    url: false,
  },
  {
    title: 'References',
    url: false,
  },
  {
    title: 'Reviews',
    url: false,
  },
  {
    title: 'Balance',
    url: false,
  },
  {
    title: 'Surveillance',
    url: false,
  },
  {
    title: 'Quotations and agreements',
    url: false,
  },
  {
    title: 'Change password',
    url: true,
    link: 'https://company.dorunner.se/account/passwordpassword',
  },
  {
    title: 'Member executives',
    url: false,
  },
  {
    title: 'Free coupons',
    url: false,
  },
  {
    title: 'Manage notifications',
    url: false,
  },
];

const Bottomfifth = props => {
  const dispatch = useDispatch();
  const onCLick = (title, type, link) => {
    if (type === 'url') {
      return Linking.openURL(link);
    } else {
      if (title === 'Contact Us') {
        props?.navigation.navigate('Kontakta');
      } else if (title === 'Referals') {
        props?.navigation.navigate('Referals');
      } else if (title === 'References') {
        props?.navigation.navigate('References');
      } else if (title === 'Reviews') {
        props?.navigation.navigate('Reviews');
      } else if (title === 'Manage notifications') {
        props?.navigation.navigate('Hantera');
      } else if (title === 'Free coupons') {
        props?.navigation.navigate('Kuponger');
      } else if (title === 'Member executives') {
        props?.navigation.navigate('Formaner');
      } else if (title === 'Quotations and agreements') {
        props?.navigation.navigate('Offerter');
      } else if (title === 'Surveillance') {
        props?.navigation.navigate('Bevakning');
      } else if (title === 'Balance') {
        props?.navigation.navigate('Balance');
      }
    }
  };
  const loginSession = useSelector(state => state.authReducers.user);
  console.log('log out loginSession', loginSession);
  const logOutUser = async () => {
    const response = await postApi(
      userLogout,
      {},
      loginSession?.token ? loginSession?.token : loginSession?.user?.token,
    );
    console.log('logout user', response);
    if (response && response.success) {
      toast.show(response.message);
      dispatch(logOutUserFromApp());
    } else {
      toast.show(response.message);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader back={false} title={'Mitt Dorunner'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.main}>
        <Text
          style={{
            marginTop: 20,
            fontSize: font8,
            color: font_black,
            fontFamily: bold,
            textAlign: 'center',
          }}>
          BOB Bemainning AB
        </Text>

        <View style={styles.boxMain}>
          <View style={styles.box}>
            <Text style={styles.boxheading}>0</Text>
            <Text style={styles.boxdesc}>KUPONGER</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxheading}>0</Text>
            <Text style={styles.boxdesc}>CREDITS</Text>
          </View>
        </View>
        <View style={{marginVertical: 20, marginHorizontal: 80}}>
          <PrimaryButton
            label={'Tomt? Kontakta oss'}
            height={50}
            lblSize={font4}
            onClick={() => {}}
            borderRadius={30}
            backgroundColor={primary}
            fill={font_black}
            txtFamily={medium}
          />
        </View>
        {loginSession?.role?.id == 2 ? (
          <TouchableHighlight
            underlayColor={secondary_light}
            onPress={() =>
              props?.navigation?.navigate('Andrasecondary_lightProfile')
            }>
            <>
              <View style={styles.listMain}>
                <View style={{flex: 0.8}}>
                  <Text style={styles.listTxt}>Second profile</Text>
                </View>
                <View style={styles.listRightView}>
                  <Image
                    style={[styles.img, {marginRight: 20}]}
                    source={{uri: 'https://company.dorunner.se/profileprofile'}}
                  />
                  <Image style={styles.img} source={arrow_right} />
                </View>
              </View>
              <View style={styles.line} />
            </>
          </TouchableHighlight>
        ) : loginSession?.company_register_num ? (
          <TouchableHighlight
            underlayColor={secondary_light}
            onPress={() => props?.navigation?.navigate('AndraProfile')}>
            <>
              <View style={styles.listMain}>
                <View style={{flex: 0.8}}>
                  <Text style={styles.listTxt}>Andra profile</Text>
                </View>
                <View style={styles.listRightView}>
                  <Image
                    style={[styles.img, {marginRight: 20}]}
                    source={{uri: 'https://company.dorunner.se/profileprofile'}}
                  />
                  <Image style={styles.img} source={arrow_right} />
                </View>
              </View>
              <View style={styles.line} />
            </>
          </TouchableHighlight>
        ) : null}
        {arr.length &&
          arr.map((data, ind) => (
            <TouchableHighlight
              underlayColor={secondary_light}
              onPress={() =>
                onCLick(data?.title, data?.url == true && 'url', data?.link)
              }
              key={ind}>
              <>
                <View style={styles.listMain}>
                  <View style={{flex: 0.8}}>
                    <Text style={styles.listTxt}>{data?.title}</Text>
                  </View>
                  <View style={styles.listRightView}>
                    {data?.url && (
                      <Image
                        style={[styles.img, {marginRight: 20}]}
                        source={link_url}
                      />
                    )}
                    <Image style={styles.img} source={arrow_right} />
                  </View>
                </View>
                {arr.length > ind + 1 && <View style={styles.line} />}
              </>
            </TouchableHighlight>
          ))}
        <View style={styles.line} />
        <TouchableHighlight
          underlayColor={secondary_light}
          onPress={() => logOutUser()}>
          <View style={styles.listMain}>
            <View style={{flex: 0.8}}>
              <Text style={styles.listTxt}>Log Out</Text>
            </View>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bottomfifth;
