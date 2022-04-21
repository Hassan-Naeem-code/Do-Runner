import React from 'react'
import { View, Text, SafeAreaView, TouchableHighlight } from 'react-native'
import CommonHeader from '../../Components/commonHeader';;
import Textinput from '../../Components/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import { font_black, primary, secondary_light } from '../../Utils/colors';
import { medium } from '../../Utils/fontFamily';
import { font3, font4, font5 } from '../../Utils/fontSize';
import styles from './css';

const Referals = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader title={'Referals'} />
            <View style={{ padding: 20, marginTop: 20 }}>
                <Text style={{ fontFamily: medium, fontSize: font4, color: font_black }}> Invite Your Industry Colleagues, get 5 Coupons</Text>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <View style={{ flex: 0.12 }}>
                        <View style={{ backgroundColor: primary, flexDirection: 'row', justifyContent: 'center', padding: 10, paddingHorizontal: 15, borderRadius: 25 }}>
                            <Text style={{ fontFamily: medium, fontSize: font5, color: font_black, fontWeight: '900' }}>1</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.88, paddingHorizontal: 5, marginTop: 5 }}>
                        <Text style={{ fontFamily: medium, fontSize: font5, color: font_black, fontWeight: '900' }}> Your Colleagues, will recieve 5 coupons</Text>
                        <Text style={{ fontFamily: medium, fontSize: font3, color: font_black, }}> Your Colleagues, will recieve 5 coupons</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <View style={{ flex: 0.12 }}>
                        <View style={{ backgroundColor: primary, flexDirection: 'row', justifyContent: 'center', padding: 10, paddingHorizontal: 15, borderRadius: 25 }}>
                            <Text style={{ fontFamily: medium, fontSize: font5, color: font_black, fontWeight: '900' }}>2</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.88, paddingHorizontal: 5, marginTop: 5 }}>
                        <Text style={{ fontFamily: medium, fontSize: font5, color: font_black, fontWeight: '900' }}> Your will get 5 coupons</Text>
                        <Text style={{ fontFamily: medium, fontSize: font3, color: font_black, }}> When your colleague registers and 3 more coupons when they make their first purchase</Text>
                    </View>
                </View>
                <View style={{ marginTop: 30, position: 'relative' }}>
                    <Text style={{ fontSize: font4, marginBottom: 10 }}>
                        Your recruiting link
                    </Text>
                    <Textinput
                        type={'normal'}
                        placeholder={'Your recruiting link'}
                        // borderRadius={25}
                        height={50}
                        txtcolor={'#000'}
                        borderColor={'#cfcfcf'}
                        borderRadius={25}
                        id_editable={true}
                    />
                    <TouchableHighlight underlayColor={secondary_light} style={{ position: 'absolute', right: 12, top: 38, backgroundColor: primary, padding: 10, borderRadius: 25 }} activeOpacity={0.9} onPress={() => { Toast.show('Link Copied') }}>
                        <FontAwesome name={'clipboard'} size={font4} />
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Referals;
