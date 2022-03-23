import React from 'react'
import { View, Text,SafeAreaView,ScrollView } from 'react-native'
import CommonHeader from '../../Components/commonHeader'
import { font_black } from '../../Utils/colors'
import { medium } from '../../Utils/fontFamily'
import { font4 } from '../../Utils/fontSize'
import styles from './css'
const kampanjer = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CommonHeader title={'Kampanjer'}/>
            <View style={{padding:20,marginTop:20}}>
            <Text style={{fontFamily:medium,fontSize:font4,color:font_black}}> Just nu har vi inga kampanjer men hall garna utkik har!</Text>
            </View>
        </SafeAreaView>
    )
}

export default kampanjer
