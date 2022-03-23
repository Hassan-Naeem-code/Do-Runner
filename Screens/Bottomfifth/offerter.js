import React from 'react'
import { View, Text,SafeAreaView,ScrollView,Image } from 'react-native'
import CommonHeader from '../../Components/commonHeader'
import PrimaryButton from '../../Components/primaryButton'
import { font_black, primary, white } from '../../Utils/colors'
import { bold, medium, regular } from '../../Utils/fontFamily'
import { font3, font4 } from '../../Utils/fontSize'
import { tick } from '../../Utils/images'

import styles from './css'
const Offerter = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CommonHeader title={'Offerter & Avtal'}/>
            <View style={{padding:20,backgroundColor:white}}>
            <View style={{marginHorizontal: 100}}>
              <PrimaryButton
                label={'Skapa offert'}
                height={50}
                lblSize={font4}
                onClick={() => {}}
                borderRadius={30}
                backgroundColor={primary}
                fill={font_black}
                txtFamily={bold}
              />
            </View>
            <View style={{flexDirection:'row',marginTop:20,flexWrap:'wrap',justifyContent:'center'}}>
            <View style={{flexDirection:'row',margin:5}}>    
            <View style={styles.offertaltickCircle}>
                  <Image style={{width: 8, height: 8}} source={tick} />
            </View>
            <Text style={styles.offerterTxt}>Snygga offerter</Text>
            </View>
            <View style={{flexDirection:'row',margin:5}}>    
            <View style={styles.offertaltickCircle}>
                  <Image style={{width: 8, height: 8}} source={tick} />
            </View>
            <Text style={styles.offerterTxt}>Sparning</Text>
            </View>
            <View style={{flexDirection:'row',margin:5}}>    
            <View style={styles.offertaltickCircle}>
                  <Image style={{width: 8, height: 8}} source={tick} />
            </View>
            <Text style={styles.offerterTxt}>Okad vinstchans</Text>
            </View>
           
            </View>
            </View>
        </SafeAreaView>
    )
}

export default Offerter
