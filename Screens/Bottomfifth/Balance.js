import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CommonHeader from '../../Components/commonHeader';
import CardModal from '../../Components/addCardModal';
import PrimaryButton from '../../Components/primaryButton';
import {font_black, secondary_light, white, primary} from '../../Utils/colors';
import {medium} from '../../Utils/fontFamily';
import {font4, font5, font6} from '../../Utils/fontSize';
import styles from './css';

const Balance = () => {
  const [selectType, setSelectType] = useState('services');
  const [active, setActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleAddCard = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={'Balance'} />
      <View style={{padding: 0, backgroundColor: white}}>
        <Text
          style={{
            fontFamily: medium,
            fontSize: font6,
            color: font_black,
            textAlign: 'center',
            marginTop: 20,
          }}>
          {' '}
          Balance
        </Text>
        <View style={{padding: 20, marginTop: 5}}>
          <Text
            style={{fontFamily: medium, fontSize: font4, textAlign: 'center'}}>
            Here, you have the opportunity to request reviews from your previous
            customers. We send them an email message asking them to rate your
            buisness based on service, quality and value for money.
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <View style={{flex: 0.6}}>
              <PrimaryButton
                label={'Add Credit Card'}
                height={50}
                lblSize={font5}
                borderRadius={30}
                backgroundColor={primary}
                fill={'#000'}
                onClick={toggleAddCard}
              />
            </View>
          </View>
        </View>
      </View>
      <CardModal modalVisible={modalVisible} onclose={toggleAddCard} />
    </SafeAreaView>
  );
};

export default Balance;
