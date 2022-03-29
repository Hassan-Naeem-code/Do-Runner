import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import Textinput from '../../Components/Input';
import PrimaryButton from '../../Components/primaryButton';
import {fontGrayLight, gray, white} from '../../Utils/colors';
import {font4, font5, font6, font8} from '../../Utils/fontSize';
import {connect, useDispatch, useSelector} from 'react-redux';
import {sessionLogin} from '../../Redux/actions/authActions';
const login = props => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginSession = useSelector(state => state.authReducers.loginSession);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        resizeMode="cover"
        source={{
          uri: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
        }}>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{flex: 1}}>
          <View style={{flex: 0.3}}></View>
          <View style={{flex: 0.7, padding: 30, justifyContent: 'center'}}>
            <Text style={{fontSize: font8, color: white, textAlign: 'center'}}>
              Lorem Ipsum.
            </Text>
            <Text style={{fontSize: font8, color: white, textAlign: 'center'}}>
              Lorem Ipsum.
            </Text>
            <Text
              style={{
                fontSize: font5,
                color: white,
                textAlign: 'center',
                marginTop: 20,
              }}>
              Lorem Ipsum.
            </Text>
            <View style={{marginTop: 10}}>
              <Textinput
                type={'normal'}
                placeholder={'Lorem Ipsum'}
                borderRadius={25}
                height={50}
                onchange={setPhone}
                value={phone}
                txtcolor={white}
              />
            </View>
            <View style={{marginTop: 20}}>
              <Textinput
                type={'normal'}
                placeholder={'Lorem Ipsum'}
                borderRadius={25}
                height={50}
                onchange={setPassword}
                value={password}
                txtcolor={white}
                // backColor={gray}
              />
            </View>
            <View style={{marginTop: 20}}>
              <PrimaryButton
                label={'Log in'}
                height={50}
                lblSize={font5}
                // onClick={() => dispatch(sessionLogin({id: 1}))}
                borderRadius={30}
                backgroundColor={'yellow'}
                fill={'#000'}
              />
            </View>
            <View style={{marginTop: 20}}>
              <PrimaryButton
                label={'Register'}
                height={50}
                lblSize={font5}
                onClick={() => props?.navigation.navigate('Register')}
                borderRadius={30}
                backgroundColor={'transparent'}
                fill={white}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default connect(null, null)(login);
