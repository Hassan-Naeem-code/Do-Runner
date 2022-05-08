import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import CommonHeader from '../../Components/commonHeader';
import Textinput from '../../Components/Input';
import Toast from 'react-native-simple-toast';
import PrimaryButton from '../../Components/primaryButton';
import LoadingButton from '../../Components/loadingButton';
import {primary} from '../../Utils/colors';
import {medium} from '../../Utils/fontFamily';
import {font4, font5} from '../../Utils/fontSize';
import {requestReviews} from '../../services/api';
import {postApi} from '../../services/apiFunction';

const Reviews = ({navigation}) => {
  const loginSession = useSelector(state => state.authReducers.user);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const submitForReview = async () => {
    if (email == '') return Toast.show('Please Enter A Email Address');
    setLoading(!loading);
    let params = {email};
    const {message, success} = await postApi(
      requestReviews,
      params,
      loginSession?.token,
    );
    setLoading(false);
    if (success) {
      Toast.show(message);
      navigation.goBack();
    } else {
      Toast.show(message);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={'Reviews'} />
      <View style={{padding: 20, marginTop: 20}}>
        <Text style={{fontFamily: medium, fontSize: font4}}>
          Here, you have the opportunity to request reviews from your previous
          customers. We send them an email message asking them to rate your
          buisness based on service, quality and value for money. Many and
          positive reviews improve your chances of winning more jobs.
        </Text>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: font4, marginBottom: 10}}>
            ASK FOR AN OPINION
          </Text>
          <Textinput
            type={'normal'}
            placeholder={'Enter Your Email Address'}
            height={50}
            txtcolor={'#000'}
            borderColor={'#000'}
            value={email}
            onchange={setEmail}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View style={{flex: 0.4}}>
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
                label={'Send'}
                height={50}
                lblSize={font5}
                borderRadius={30}
                backgroundColor={primary}
                fill={'#000'}
                onClick={() => {
                  submitForReview();
                }}
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reviews;
