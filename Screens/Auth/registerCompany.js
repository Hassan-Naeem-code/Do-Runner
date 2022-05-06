import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CustomHeader from '../../Components/customHeader';
import Textinput from '../../Components/Input';
import PrimaryButton from '../../Components/primaryButton';
import {white} from '../../Utils/colors';
import {font4, font5, font6} from '../../Utils/fontSize';
import {tick} from '../../Utils/images';
import CheckBox from '@react-native-community/checkbox';
import LoadingButton from '../../Components/loadingButton';
import {registerCompanies, getCountry, getCity} from '../../services/api';
import {postApi, getApi} from '../../services/apiFunction';
import CustomModal from '../../Components/modal';
import toast from 'react-native-simple-toast';

const RegisterCompany = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country_get, setCountry] = useState(null);
  const [allCities, setAllCities] = useState([]);
  const [city_id, setCityId] = useState('');
  const [city_name, setCityName] = useState('');
  const [company_name, setCompanyName] = useState('');
  const [company_email, setCompanyEmail] = useState('');
  const [company_description, setCompanyDescription] = useState('');
  const [company_register_num, setCompanyRegisterNumber] = useState('');
  const [company_address, setCompanyAddress] = useState('');
  const [company_billing_address, setCompanyBillingAddress] = useState('');
  const [page_link, setPageLink] = useState('');
  const [number_of_employees, setNumberOfEmployees] = useState('');
  const [phone, setPhone] = useState('');
  const [zip_code, setZipCode] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  //   Function To Register A Company
  const registerCompany = async () => {
    console.log('function called');
    let data = {
      name,
      email,
      password,
      company_name,
      company_email,
      company_description,
      company_register_num,
      company_address,
      billing_address: company_billing_address,
      page_link,
      number_of_employees,
      phone,
      zip_code,
      city_id,
      role_id: 2,
      status: 1,
    };
    if (
      name !== '' ||
      email !== '' ||
      password !== '' ||
      company_name !== '' ||
      company_email !== '' ||
      company_description !== '' ||
      company_register_num !== '' ||
      company_address !== '' ||
      company_billing_address !== '' ||
      number_of_employees !== '' ||
      phone !== '' ||
      city_id !== ''
    ) {
      setLoading(!loading);
      console.log(
        'data',
        data,
        'url',
        'https://qraftsman.wepsol.pk/api/' + registerCompanies,
      );
      const {message, success} = await postApi(registerCompanies, data);
      // console.log('result', result);
      if (success) {
        toast.show(message);
        navigation.goBack();
      } else {
        toast.show(message);
      }
      setLoading(false);
    } else {
      setLoading(false);
      toast.show('Please Fill The Fields First');
    }
  };
  //   Function To Get Data For Country And Cities
  const getInfos = async () => {
    const {country} = await getApi(getCountry);
    const {cities} = await getApi(getCity);
    console.log('country', country);
    console.log('cities', cities);
    if (country) {
      setCountry(country);
    }
    if (cities) {
      setAllCities(cities.slice(0, 10));
    }
  };
  //   Function To Open Modal For Cities Selection
  const openCityVisible = () => {
    console.log('openCityVisible');
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    getInfos();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: white}}>
      <CustomHeader />
      <CustomModal
        modalVisible={modalVisible}
        allCities={allCities}
        onclose={() => setModalVisible(false)}
        city_id={city_id}
        setCityId={setCityId}
        setCityName={setCityName}
      />
      <ScrollView contentContainerStyle={{padding: 10}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: font6,
            marginHorizontal: 40,
          }}>
          Register as a company
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

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Enter Your Name *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Enter Your Name'}
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
            Enter Your Email Address *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Enter Your Email Address'}
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
            placeholder={'Password'}
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
            placeholder={'Confirm Password'}
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
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Company Name *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Company Name'}
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
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Company Email *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Company Email'}
            // borderRadius={25}
            height={50}
            onchange={setCompanyEmail}
            value={company_email}
            txtcolor={'#000'}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Company Description *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Company Description'}
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
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Business Register No *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Business Register No'}
            // borderRadius={25}
            height={50}
            onchange={setCompanyRegisterNumber}
            value={company_register_num}
            txtcolor={'#000'}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Company Address *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Company Address'}
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
          <Text style={{fontSize: font4, marginBottom: 10}}>
            The Company's Billing Address *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={"The Company's Billing Address"}
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
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Link To Company Page
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Link To Company Page'}
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
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Company Number Of Employees *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Company Number Of Employees'}
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
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Company Phone Number *
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Company Phone Number'}
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
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Company Country (standard)
          </Text>
          <Textinput
            type={'normal'}
            placeholder={
              country_get !== null
                ? country_get?.name
                : ' Company Country (standard)'
            }
            // borderRadius={25}
            height={50}
            txtcolor={'#000'}
            borderColor={'#000'}
            keyboardtype={'number-pad'}
            id_editable={true}
            // backColor={gray}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            Company City *
          </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={openCityVisible}>
            <Textinput
              type={'normal'}
              placeholder={city_name !== '' ? city_name : 'Company City'}
              height={50}
              txtcolor={'#000'}
              borderColor={'#000'}
              id_editable={true}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>ZIP Code</Text>
          <Textinput
            type={'normal'}
            placeholder={'ZIP Code'}
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
            I accept and accept the privacy policy and the terms.
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
                registerCompany();
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

export default RegisterCompany;
