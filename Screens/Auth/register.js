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
const Register = props => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
            Lorem Ipsum Ipsum *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Lorem Ipsum'}
            // borderRadius={25}
            height={50}
            onchange={setPassword}
            value={password}
            txtcolor={white}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Lorem Ipsum Ipsum *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Lorem Ipsum'}
            // borderRadius={25}
            height={50}
            onchange={setPassword}
            value={password}
            txtcolor={white}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Lorem Ipsum Ipsum *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Lorem Ipsum'}
            // borderRadius={25}
            height={50}
            onchange={setPassword}
            value={password}
            txtcolor={white}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Lorem Ipsum Ipsum *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Lorem Ipsum'}
            // borderRadius={25}
            height={50}
            onchange={setPassword}
            value={password}
            txtcolor={white}
            borderColor={'#000'}
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
            onClick={() => {}}
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
