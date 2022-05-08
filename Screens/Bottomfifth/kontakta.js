import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RadioButton} from 'react-native-paper';
import CommonHeader from '../../Components/commonHeader';
import PrimaryButton from '../../Components/primaryButton';
import LoadingButton from '../../Components/loadingButton';
import Textinput from '../../Components/Input';
import {font_black, secondary_light, white, primary} from '../../Utils/colors';
import {medium} from '../../Utils/fontFamily';
import {font4, font5, font6} from '../../Utils/fontSize';
import {contactUsOption, submitContactUs} from '../../services/api';
import {postApi, getApi} from '../../services/apiFunction';
import Toast from 'react-native-simple-toast';
import styles from './css';

const Kontakta = ({navigation}) => {
  const loginSession = useSelector(state => state.authReducers.user);
  const [selectType, setSelectType] = useState(0);
  const [contactUsOptions, setContactUsOption] = useState([]);
  const [prefabText, setPrefabText] = useState('');
  const [contactQuestion, setContactQuestion] = useState('');
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enable, setEnable] = useState(false);
  const getQuestionsAboutContact = async () => {
    setLoading(!loading);
    const {data, message, success} = await getApi(
      contactUsOption,
      loginSession?.token,
    );
    setLoading(false);
    if (success) {
      console.log('data.....', data);
      setContactUsOption(data);
      setSelectType(data[0]?.id);
      setPrefabText(message);
    } else {
      console.log('data.....', data);
      setPrefabText(message);
    }
  };
  const submitContactUsFrom = async () => {
    if (contactQuestion == '') return Toast.show('Please Enter A Question');
    let params = {detail: contactQuestion, option_id: selectType};
    const {message, success} = await postApi(
      submitContactUs,
      params,
      loginSession?.token,
    );
    if (success) {
      Toast.show(message);
      navigation.goBack();
    } else {
      Toast.show(message);
    }
    setEnable(!enable);
  };
  useEffect(() => {
    getQuestionsAboutContact();
    return () => {
      setSelectType(0);
      setContactUsOption([]);
      setPrefabText('');
      setContactQuestion('');
      setActive(false);
      setLoading(false);
      setEnable(false);
    };
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={'Kontakta oss'} />
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
          Kundtjanst
        </Text>
        {active ? (
          <View style={{paddingHorizontal: 20}}>
            <View style={{marginTop: 30}}>
              <Text style={{fontSize: font4, marginBottom: 10}}>
                Enter Questions *
              </Text>
              <Textinput
                type={'normal'}
                placeholder={'Ange ditt namn'}
                // borderRadius={25}
                height={50}
                onchange={setContactQuestion}
                value={contactQuestion}
                txtcolor={'#000'}
                borderColor={'#000'}
                // backColor={gray}
              />
            </View>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={{flex: 0.8}}>
                {enable ? (
                  <LoadingButton
                    height={50}
                    lblSize={font5}
                    borderRadius={30}
                    backgroundColor={'yellow'}
                    fill={'#000'}
                  />
                ) : (
                  <PrimaryButton
                    label={'Submit'}
                    height={50}
                    lblSize={font5}
                    onClick={() => {
                      submitContactUsFrom();
                    }}
                    borderRadius={30}
                    backgroundColor={primary}
                    fill={'#000'}
                  />
                )}
              </View>
            </View>
          </View>
        ) : (
          <>
            {contactUsOptions.length > 0 ? (
              contactUsOptions.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <TouchableHighlight
                      underlayColor={secondary_light}
                      onPress={() => {
                        setSelectType(item?.id);
                      }}>
                      <View style={[styles.listMain, {padding: 20}]}>
                        <View
                          style={[
                            styles.listRightView,
                            {justifyContent: 'center'},
                          ]}>
                          <RadioButton
                            color="#000"
                            uncheckedColor="#000"
                            status={
                              selectType === item?.id ? 'checked' : 'unchecked'
                            }
                            onPress={() => {
                              setSelectType(item?.id);
                            }}
                            value={selectType}
                          />
                        </View>
                        <View style={{flex: 0.8, justifyContent: 'center'}}>
                          <Text style={[styles.listTxt]}>{item?.name}</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                    {contactUsOptions.length !== index && (
                      <View style={styles.line} />
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: '20%',
                }}>
                {loading ? (
                  <ActivityIndicator
                    size="large"
                    color={'#000'}
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}
                  />
                ) : (
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                    }}>
                    {prefabText}
                  </Text>
                )}
              </View>
            )}

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{flex: 0.4}}>
                <PrimaryButton
                  label={'Next'}
                  height={50}
                  lblSize={font5}
                  onClick={() => {
                    setActive(!active);
                  }}
                  borderRadius={30}
                  backgroundColor={primary}
                  fill={'#000'}
                />
              </View>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Kontakta;
