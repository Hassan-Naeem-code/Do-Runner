import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import CommonHeader from '../../Components/commonHeader';;
import Textinput from '../../Components/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import PrimaryButton from '../../Components/primaryButton';
import { font_black, primary } from '../../Utils/colors';
import { medium } from '../../Utils/fontFamily';
import { font3, font4, font5 } from '../../Utils/fontSize';
import styles from './css';

const Reviews = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader title={'Reviews'} />
            <View style={{ padding: 20, marginTop: 20 }}>
                <Text style={{ fontFamily: medium, fontSize: font4 }}>Here, you have the opportunity to request reviews from your previous customers. We send them an email message asking them to rate your buisness based on service, quality and value for money. Many and positive reviews improve your chances of winning more jobs.</Text>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: font4, marginBottom: 10 }}>
                        ASK FOR AN OPINION
                    </Text>
                    <Textinput
                        type={'normal'}
                        placeholder={'Enter Your Email Address'}
                        height={50}
                        txtcolor={'#000'}
                        borderColor={'#000'}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <View style={{ flex: 0.4 }}>
                        <PrimaryButton
                            label={'Send'}
                            height={50}
                            lblSize={font5}
                            borderRadius={30}
                            backgroundColor={primary}
                            fill={'#000'}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Reviews;
