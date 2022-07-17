import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import CommonHeader from '../../Components/commonHeader';
import CardModal from '../../Components/addCardModal';
import PrimaryButton from '../../Components/primaryButton';
import {font_black, secondary_light, white, primary} from '../../Utils/colors';
import {medium} from '../../Utils/fontFamily';
import {font4, font5, font6} from '../../Utils/fontSize';
import {
  addPaymentMethod,
  myReferences,
  deleteReference,
  updateReference,
} from '../../services/api';
import {getApi, postApi} from '../../services/apiFunction';
import Toast from 'react-native-simple-toast';
import styles from './css';

const Balance = ({navigation}) => {
  const loginSession = useSelector(state => state.authReducers.user);
  const [selectType, setSelectType] = useState('services');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardHolderAddress, setCardHolderAddress] = useState('');
  const [cardHolderZipCode, setCardHolderZipCode] = useState('');
  const [cardHolderPostOffice, setCardHolderPostOffice] = useState('');
  const [cardHolderEmailAddress, setCardHolderEmailAddress] = useState('');
  const [cardHolderCardNumber, setCardHolderCardNumber] = useState('');
  const [cardHolderCardCvc, setCardHolderCardCvc] = useState('');
  const [cardHolderCardExpiryMonth, setCardHolderCardExpiryMonth] =
    useState('');
  const [cardHolderCardExpiryYear, setCardHolderCardExpiryYear] = useState('');
  const [active, setActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleAddCard = () => {
    setModalVisible(!modalVisible);
  };
  const submitCardDetails = async () => {
    if (cardHolderName == '')
      return Toast.show('Please Enter The Card Holder Name');
    if (cardHolderAddress == '')
      return Toast.show('Please Enter The Card Holder Address');
    if (cardHolderZipCode == '')
      return Toast.show('Please Enter The Card Holder ZipCode');
    if (cardHolderPostOffice == '')
      return Toast.show('Please Enter The Card Holder Post Office');
    if (cardHolderEmailAddress == '')
      return Toast.show('Please Enter The Card Holder Email Address');
    if (cardHolderCardNumber == '')
      return Toast.show('Please Enter The Card Holder Number');
    if (cardHolderCardCvc == '')
      return Toast.show('Please Enter The Card Holder Cvc');
    if (cardHolderCardExpiryMonth == '')
      return Toast.show('Please Enter The Card Holder Expiry Month');
    if (cardHolderCardExpiryYear == '')
      return Toast.show('Please Enter The Card Holder Expiry Year');
    setActive(!active);
    let params = {
      name: cardHolderName,
      email: cardHolderEmailAddress,
      address: cardHolderAddress,
      zip_code: Number(cardHolderZipCode),
      post_office: cardHolderPostOffice,
      card_number: Number(cardHolderCardNumber),
      expiry_year: Number(cardHolderCardExpiryYear),
      expiry_month: Number(cardHolderCardExpiryMonth),
      cvc: Number(cardHolderCardCvc),
    };
    try {
      const {data, success, message} = await postApi(
        addPaymentMethod,
        params,
        loginSession?.token,
      );
      if (success) {
        Toast.show(message);
        navigation.goBack();
      } else {
        Toast.show(message);
      }
    } catch (error) {
      const {message, success} = error;
      if (message) {
        Toast.show(message);
      } else {
        Toast.show(message);
      }
    } finally {
      setActive(false);
    }
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
      <CardModal
        modalVisible={modalVisible}
        onclose={toggleAddCard}
        cardHolderName={cardHolderName}
        setCardHolderName={setCardHolderName}
        cardHolderAddress={cardHolderAddress}
        setCardHolderAddress={setCardHolderAddress}
        cardHolderZipCode={cardHolderZipCode}
        setCardHolderZipCode={setCardHolderZipCode}
        cardHolderPostOffice={cardHolderPostOffice}
        setCardHolderPostOffice={setCardHolderPostOffice}
        cardHolderEmailAddress={cardHolderEmailAddress}
        setCardHolderEmailAddress={setCardHolderEmailAddress}
        cardHolderCardNumber={cardHolderCardNumber}
        setCardHolderCardNumber={setCardHolderCardNumber}
        cardHolderCardCvc={cardHolderCardCvc}
        setCardHolderCardCvc={setCardHolderCardCvc}
        cardHolderCardExpiryMonth={cardHolderCardExpiryMonth}
        setCardHolderCardExpiryMonth={setCardHolderCardExpiryMonth}
        cardHolderCardExpiryYear={cardHolderCardExpiryYear}
        setCardHolderCardExpiryYear={setCardHolderCardExpiryYear}
        active={active}
        submitCardDetails={submitCardDetails}
      />
    </SafeAreaView>
  );
};

export default Balance;
