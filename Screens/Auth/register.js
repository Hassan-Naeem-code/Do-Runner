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
import LoadingButton from '../../Components/loadingButton';
import {registerCustomer} from '../../services/api';
import {postApi} from '../../services/apiFunction';
import toast from 'react-native-simple-toast';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const registerUser = async () => {
    console.log('function called');
    let data = {
      name,
      email,
      password,
      role_id: 1,
    };
    if (name !== '' || email !== '' || password !== '') {
      setLoading(!loading);
      console.log(
        'data',
        data,
        'url',
        'https://qraftsman.wepsol.pk/api/' + registerCustomer,
      );
      const {message, success, user} = await postApi(registerCustomer, data);
      if (success) {
        toast.show(message);
        navigation.goBack();
      }
      setLoading(false);
    } else {
      setLoading(false);
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
            Ange ditt namn *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Ange ditt namn'}
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
            Skriv in din e-postadress *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Skriv in din e-postadress'}
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
          <Text style={{fontSize: font4, marginBottom: 10}}>Lösenord *</Text>
          <Textinput
            type={'normal'}
            placeholder={'Lösenord'}
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
            Bekräfta lösenord *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Bekräfta lösenord'}
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
            Jag accepterar och godkänner integritetspolicyn och villkoren.
          </Text>
        </View>
        <View style={{marginHorizontal: 30, marginBottom: 10}}>
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
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
