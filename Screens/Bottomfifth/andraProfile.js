import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CommonHeader from '../../Components/commonHeader';
import Textinput from '../../Components/Input';
import PrimaryButton from '../../Components/primaryButton';
import LoadingButton from '../../Components/loadingButton';
import {font4, font5} from '../../Utils/fontSize';
import {updateCompaniesInfo} from '../../services/api';
import {postApi} from '../../services/apiFunction';
import {sessionLogin} from '../../Redux/actions/authActions';
import {font_black, white} from '../../Utils/colors';
import toast from 'react-native-simple-toast';

const AndraProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const loginSession = useSelector(state => state.authReducers.user);
  const [company_name, setCompanyName] = useState('');
  const [company_description, setCompanyDescription] = useState('');
  const [company_address, setCompanyAddress] = useState('');
  const [company_billing_address, setCompanyBillingAddress] = useState('');
  const [page_link, setPageLink] = useState('');
  const [number_of_employees, setNumberOfEmployees] = useState('');
  const [phone, setPhone] = useState('');
  const [zip_code, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const updateCompany = async () => {
    console.log('function called');
    let params = {
      company_name,
      company_description,
      company_address,
      billing_address: company_billing_address,
      page_link,
      number_of_employees,
      phone,
      zip_code,
      role_id: 2,
      status: 1,
    };
    if (
      company_name !== '' ||
      company_description !== '' ||
      company_address !== '' ||
      company_billing_address !== '' ||
      number_of_employees !== '' ||
      phone !== ''
    ) {
      setLoading(!loading);
      console.log(
        'data',
        params,
        'url',
        'https://qraftsman.wepsol.pk/api/' + updateCompaniesInfo,
      );
      const {success, message, data} = await postApi(
        updateCompaniesInfo,
        params,
        loginSession?.token,
      );
      if (success) {
        dispatch(sessionLogin(data));
        toast.show(message);
        navigation.goBack();
      } else {
        toast.show(message);
      }
      setLoading(false);
    } else {
      setLoading(false);
      toast.show('Please First Update Any Field');
    }
  };
  console.log('loginSession', loginSession);
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={'AndraProfile'} />
      <ScrollView>
        <View style={{padding: 20, marginTop: 20}}>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              Företagsnamn *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={
                loginSession?.company
                  ? loginSession?.company?.name
                  : loginSession?.name
                  ? loginSession?.name
                  : 'Företagsnamn'
              }
              // borderRadius={25}
              height={50}
              onchange={setCompanyName}
              value={company_name}
              txtcolor={'#000'}
              borderColor={'#000'}
              // backColor={gray}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              Företagsbeskrivning *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={
                loginSession?.company
                  ? loginSession?.company?.description
                  : loginSession?.description
                  ? loginSession?.description
                  : 'Företagsbeskrivning'
              }
              // borderRadius={25}
              height={50}
              onchange={setCompanyDescription}
              value={company_description}
              txtcolor={'#000'}
              borderColor={'#000'}
              // backColor={gray}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              Företags Adress *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={
                loginSession?.company
                  ? loginSession?.company?.company_address
                  : loginSession?.company_address
                  ? loginSession?.company_address
                  : 'Företags Adress'
              }
              // borderRadius={25}
              height={50}
              onchange={setCompanyAddress}
              value={company_address}
              txtcolor={'#000'}
              borderColor={'#000'}
              // backColor={gray}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              Företagets faktureringsadress *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={
                loginSession?.company
                  ? loginSession?.company?.billing_address
                  : loginSession?.billing_address
                  ? loginSession?.billing_address
                  : 'Företagets faktureringsadress'
              }
              // borderRadius={25}
              height={50}
              onchange={setCompanyBillingAddress}
              value={company_billing_address}
              txtcolor={'#000'}
              borderColor={'#000'}
              // backColor={gray}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              Länk till företagssida
            </Text>
            <Textinput
              type={'normal'}
              placeholder={
                loginSession?.company
                  ? loginSession?.company?.page_link
                  : loginSession?.page_link
                  ? loginSession?.page_link
                  : 'Länk till företagssida'
              }
              // borderRadius={25}
              height={50}
              onchange={setPageLink}
              value={page_link}
              txtcolor={'#000'}
              borderColor={'#000'}
              // backColor={gray}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              Företag Antal anställda *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={
                loginSession?.company
                  ? String(loginSession?.company?.number_of_employees)
                  : loginSession?.number_of_employees
                  ? String(loginSession?.number_of_employees)
                  : 'Företag Antal anställda'
              }
              // borderRadius={25}
              height={50}
              onchange={setNumberOfEmployees}
              value={number_of_employees}
              txtcolor={'#000'}
              borderColor={'#000'}
              keyboardtype={'number-pad'}
              // backColor={gray}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              Företagets telefonnummer *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={
                loginSession?.company
                  ? String(loginSession?.company?.phone)
                  : loginSession?.phone
                  ? String(loginSession?.phone)
                  : 'Företagets telefonnummer'
              }
              // borderRadius={25}
              height={50}
              onchange={setPhone}
              value={phone}
              txtcolor={'#000'}
              borderColor={'#000'}
              keyboardtype={'number-pad'}
              // backColor={gray}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              Postnummer
            </Text>
            <Textinput
              type={'normal'}
              placeholder={
                loginSession?.company
                  ? String(loginSession?.company?.zip_code)
                  : loginSession?.zip_code
                  ? String(loginSession?.zip_code)
                  : 'Postnummer'
              }
              // borderRadius={25}
              height={50}
              onchange={setZipCode}
              value={zip_code}
              txtcolor={'#000'}
              borderColor={'#000'}
              keyboardtype={'number-pad'}
              // backColor={gray}
            />
          </View>
          <View style={{marginHorizontal: 30, marginVertical: 10}}>
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
                label={'AndraProfile'}
                height={50}
                lblSize={font5}
                onClick={() => {
                  updateCompany();
                }}
                borderRadius={30}
                backgroundColor={'yellow'}
                fill={'#000'}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AndraProfile;
