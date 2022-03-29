import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import CustomHeader from '../../Components/customHeader';
import Textinput from '../../Components/Input';
import PrimaryButton from '../../Components/primaryButton';
import {fontGrayLight, gray, white} from '../../Utils/colors';
import {font4, font5, font6, font8} from '../../Utils/fontSize';
import {tick} from '../../Utils/images';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob';
import {register} from '../../services/api';
import {postApi} from '../../services/apiFunction';
import toast from 'react-native-simple-toast';
// import * as https from 'https';
// At request level
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const Register = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const registerUser = async () => {
    console.log('function called');
    let data = {
      name,
      email,
      password,
      role_id: 1,
    };
    if (name !== '' || email !== '' || password !== '') {
      console.log('data', data);
      // fetch('https://qraftsman.wepsol.pk/api/' + register, {
      //   method: 'POST',
      //   crossDomain: true,
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: data,
      // })
      //   .then(response => response.json())
      //   .then(responseJson => {
      //     console.log(JSON.stringify(responseJson));
      //   })
      //   .catch(err => {
      //     console.log(err.toString());
      //   });
      // RNFetchBlob.config({
      //   trusty: true,
      // })
      //   .fetch('POST', 'https://qraftsman.wepsol.pk/api/' + register, data)
      //   .then(resp => {
      //     console.log('resp', resp);
      //   })
      //   .catch(err => {
      //     console.log('error', err);
      //   });
      const result = await axios.post(
        'https://qraftsman.wepsol.pk/api/' + register,
        data,
        {httpsAgent: agent},
      );
      // const result = await postApi(register, data);
      console.log('result', result);
      toast.show('Register SuccessFully');
    } else {
      console.log('Fill Data');
      toast.show('Please Fill The Fields First');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: white}}>
      <CustomHeader />
      <ScrollView contentContainerStyle={{padding: 10}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: font6,
            marginHorizontal: 40,
          }}>
          Lorem Ipsum Ipsum. Lorem Ipsum Ipsum.
        </Text>
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: '#000',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image style={{width: 15, height: 12}} source={tick} />
          </View>
          <Text
            style={{
              fontSize: font4,
              marginLeft: 10,
            }}>
            Lorem Ipsum Ipsum. Lorem Ipsum Ipsum.
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: '#000',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image style={{width: 15, height: 12}} source={tick} />
          </View>
          <Text
            style={{
              fontSize: font4,
              marginLeft: 10,
            }}>
            Lorem Ipsum Ipsum. Lorem Ipsum Ipsum.
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: '#000',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image style={{width: 15, height: 12}} source={tick} />
          </View>
          <Text
            style={{
              fontSize: font4,
              marginLeft: 10,
            }}>
            Lorem Ipsum Ipsum. Lorem Ipsum Ipsum.
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Enter Your Name *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Lorem Ipsum'}
            // borderRadius={25}
            height={50}
            onchange={setName}
            value={name}
            txtcolor={'#000'}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Enter Your Email *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Lorem Ipsum'}
            // borderRadius={25}
            height={50}
            onchange={setEmail}
            value={email}
            txtcolor={'#000'}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>Password *</Text>
          <Textinput
            type={'normal'}
            placeholder={'Lorem Ipsum'}
            // borderRadius={25}
            height={50}
            onchange={setPassword}
            value={password}
            txtcolor={'#000'}
            borderColor={'#000'}
            secureTextEntry={true}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Confirm Password *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Lorem Ipsum'}
            // borderRadius={25}
            height={50}
            onchange={setConfirmPassword}
            value={confirmPassword}
            txtcolor={'#000'}
            borderColor={'#000'}
            secureTextEntry={true}
            // backColor={gray}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <View>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              boxType={'square'}
            />
          </View>
          <Text
            style={{
              fontSize: font4,
              width: '90%',
              marginLeft: 10,
            }}>
            Lorem Ipsum Ipsum. Lorem Ipsum Ipsum. Lorem Ipsum Ipsum. Lorem Ipsum
            Ipsum.Lorem Ipsum Ipsum. Lorem Ipsum Ipsum. Lorem Ipsum Ipsum. Lorem
            Ipsum Ipsum.
          </Text>
        </View>
        <View style={{marginHorizontal: 30, marginBottom: 10}}>
          <PrimaryButton
            label={'Register'}
            height={50}
            lblSize={font5}
            onClick={() => {
              registerUser();
            }}
            borderRadius={30}
            backgroundColor={'yellow'}
            fill={'#000'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
