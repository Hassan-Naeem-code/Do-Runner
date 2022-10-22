import React, {useState} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import Textinput from '../../Components/Input';
import PrimaryButton from '../../Components/primaryButton';
import {fontGrayLight, gray, white} from '../../Utils/colors';
import {font4, font5, font6, font8} from '../../Utils/fontSize';
import {useDispatch} from 'react-redux';
import LoadingButton from '../../Components/loadingButton';
import {sessionLogin} from '../../Redux/actions/authActions';
import {userLogin} from '../../services/api';
import {postApi} from '../../services/apiFunction';
import toast from 'react-native-simple-toast';

const login = ({navigation, route}) => {
  const {as} = route.params;
  const heading = as == 'user' ? 'Login As A User' : 'Login As A Company';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // Function To Login The User
  const loginUser = async () => {
    console.log('function called');
    let data = {
      email,
      password,
    };
    if (email !== '' || password !== '') {
      setLoading(!loading);
      console.log('data', data);
      const {message, success, user} = await postApi(userLogin, data);
      if (success) {
        setLoading(false);
        dispatch(sessionLogin(user));
        toast.show(message);
      }
    } else {
      setLoading(false);
      console.log('Fill Data');
      toast.show('Please Fill The Fields First');
    }
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        resizeMode="cover"
        source={require('../../assets/background.jpg')}>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{flex: 1}}>
          <View style={{flex: 0.3}}></View>
          <View style={{flex: 0.7, padding: 30, justifyContent: 'center'}}>
            <Text style={{fontSize: font8, color: white, textAlign: 'center'}}>
              {heading}
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
                placeholder={'Enter Email Address'}
                borderRadius={25}
                height={50}
                onchange={setEmail}
                value={email}
                txtcolor={white}
              />
            </View>
            <View style={{marginTop: 20}}>
              <Textinput
                type={'normal'}
                placeholder={'Password'}
                borderRadius={25}
                height={50}
                onchange={setPassword}
                value={password}
                txtcolor={white}
                secureTextEntry={true}
                // backColor={gray}
              />
            </View>
            <View style={{marginTop: 20}}>
              {loading ? (
                <LoadingButton
                  height={50}
                  lblSize={font5}
                  borderRadius={30}
                  backgroundColor={'yellow'}
                  fill={'#000'}
                />
              ) : (
                <PrimaryButton
                  label={'Log in'}
                  height={50}
                  lblSize={font5}
                  onClick={() => loginUser()}
                  borderRadius={30}
                  backgroundColor={'yellow'}
                  fill={'#000'}
                />
              )}
            </View>
            <View style={{marginTop: 20}}>
              <PrimaryButton
                label={'Register'}
                height={50}
                lblSize={font5}
                onClick={() =>
                  navigation.navigate(
                    as == 'user' ? 'Register' : 'RegisterCompany',
                  )
                }
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

export default login;
