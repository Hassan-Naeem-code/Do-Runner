import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import PrimaryButton from '../../Components/primaryButton';
import {fontGrayLight, gray, white} from '../../Utils/colors';
import {font4, font5, font6, font8} from '../../Utils/fontSize';

const SelectAuth = ({navigation}) => {
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
              Login As
            </Text>
            <View style={{marginTop: 20}}>
              <PrimaryButton
                label={'Login As User'}
                height={50}
                lblSize={font5}
                onClick={() => navigation.navigate('Login', {as: 'user'})}
                borderRadius={30}
                backgroundColor={'yellow'}
                fill={'#000'}
              />
            </View>
            <View style={{marginTop: 20}}>
              <PrimaryButton
                label={'Login As Company'}
                height={50}
                lblSize={font5}
                onClick={() => navigation.navigate('Login', {as: 'company'})}
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

export default SelectAuth;
