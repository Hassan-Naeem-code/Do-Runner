import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableHighlight,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import CommonHeader from '../../Components/commonHeader';
import PrimaryButton from '../../Components/primaryButton';
import Textinput from '../../Components/Input';
import { font_black, secondary_light, white } from '../../Utils/colors';
import { medium } from '../../Utils/fontFamily';
import { font4, font5, font6 } from '../../Utils/fontSize';
import { phone, email } from '../../Utils/images';

import styles from './css';
const Balance = () => {
    const [selectType, setSelectType] = useState('services');
    const [active, setActive] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader title={'Balance'} />
            <View style={{ padding: 0, backgroundColor: white }}>
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
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontSize: font4, marginBottom: 10 }}>
                            Enter Questions *
                        </Text>
                        <Textinput
                            type={'normal'}
                            placeholder={'Ange ditt namn'}
                            // borderRadius={25}
                            height={50}
                            // onchange={setName}
                            // value={name}
                            txtcolor={'#000'}
                            borderColor={'#000'}
                        // backColor={gray}
                        />
                    </View>
                    <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 0.8 }}>
                            <PrimaryButton
                                label={'Submit'}
                                height={50}
                                lblSize={font5}
                                onClick={() => {
                                    // registerCompany();
                                }}
                                borderRadius={30}
                                backgroundColor={'yellow'}
                                fill={'#000'}
                            />
                        </View>
                    </View>
                </View>
            </View >
        </SafeAreaView >
    );
};

export default Balance;
